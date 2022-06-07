package com.example.whiteboardCollab;

import jakarta.websocket.EncodeException;
import jakarta.websocket.Encoder;
import jakarta.websocket.EndpointConfig;

public class containerEncoder implements Encoder.Text<Container> {
    @Override
    public String encode(Container container) throws EncodeException {
        return container.getJson().toString();
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("here");
    }

    @Override
    public void destroy() {
        System.out.println("there");
    }


}


