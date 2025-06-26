package com.example.junit_exercises;


import org.junit.Test;
import static org.junit.Assert.*;
public class MyFirstTest {
	@Test
    public void testAddition() {
        assertEquals(5, 3 + 2);
    }
}	
