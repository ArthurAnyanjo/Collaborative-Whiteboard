package com.example.whiteboardCollab;

import jakarta.json.Json;
import jakarta.json.JsonException;
import jakarta.json.JsonObject;
import jakarta.websocket.DecodeException;
import jakarta.websocket.Decoder;
import jakarta.websocket.EndpointConfig;

import java.io.StringReader;

public class containerDecoder implements Decoder.Text<Container> {

    @Override
    public Container decode(String s) throws DecodeException {
        JsonObject jsonObject = Json.createReader (new StringReader(s)).readObject();
        return new Container(jsonObject);
    }

    @Override
    public boolean willDecode(String s) {
        try {
            Json.createReader (new StringReader (s)).readObject ();
            return true;
        } catch (JsonException ex) {
            ex.printStackTrace ();
            return false;
        }
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println ("here");
    }

    @Override
    public void destroy() {
        System.out.println ("not here");
    }
}
