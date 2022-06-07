package com.example.whiteboardCollab;

import jakarta.json.Json;
import jakarta.json.JsonObject;

import java.io.StringWriter;

public class Container {

    private JsonObject json;

    public Container(JsonObject json) {
        this.json = json;
    }

    public JsonObject getJson() {
        return json;
    }

    public void setJson(JsonObject json) {
        this.json = json;
    }
    @Override
    public String toString() {
        StringWriter sw = new StringWriter();
        Json.createWriter(sw).write(json);
        return sw.toString();
    }
}
