package com.grammitra.backend.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    private String type = "Point"; // GeoJSON type
    private double[] coordinates; // [longitude, latitude]
}