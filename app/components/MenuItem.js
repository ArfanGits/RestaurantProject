import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, Touchable } from 'react-native';

const MenuItem = props => {
    return (
        <TouchableHighlight>
            <View>
                <View>
                    <Text>{props.item.name}</Text>
                    <Text>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default MenuItem;