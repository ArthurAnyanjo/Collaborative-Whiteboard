package com.example.whiteboardCollab;

import jakarta.jms.Message;
import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.*;

@ServerEndpoint(value = "/wboardendpoint",encoders = {containerEncoder.class},decoders = {containerDecoder.class})
public class boardServer {
    private static final Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());


    @OnOpen
    public void onOpen(Session peer) throws IOException {
        peers.add(peer);

    }

    @OnClose
    public void onClose(Session peer) throws IOException,EncodeException {
        peers.remove(peer);

      }

    @OnMessage
    public void broadcastContainer(Container contains, Session session) throws IOException, EncodeException {

        System.out.println("broadcastContains: " + contains);
        for (Session peer : peers) {
            if (!peer.equals(session)) {
                peer.getBasicRemote().sendObject(contains);
            }
        }
    }
    
    @OnMessage
    public void broadcastSnapshot(ByteBuffer process, Session session) throws IOException {
        System.out.println("broadcastBinary: " + process);
        for (Session peer : peers) {
            if (!peer.equals(session)) {
                peer.getBasicRemote().sendBinary(process);
            }
        }
    }
}


