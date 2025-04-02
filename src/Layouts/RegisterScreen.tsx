import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"

export default function RegisterScreen({onCLose }:any){
    return(
        <View>
            <Text>Sign up</Text>
            <TouchableOpacity onPress={onCLose}>
                <Text>Back to Login</Text>
            </TouchableOpacity>
        


        </View>
    )
}