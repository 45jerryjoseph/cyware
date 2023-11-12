import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const securityDetails = [
  {
    id: '1',
    title: 'Data Encryption',
    content: [
      'Encrypt sensitive data in transit using HTTPS/TLS.',
      'Encrypt sensitive data at rest, such as user credentials and personal information.',
    ],
  },
  {
    id: '2',
    title: 'Secure Authentication',
    content: [
      'Implement strong password policies.',
      'Support multi-factor authentication (MFA) for added security.',
      'Avoid storing passwords in plain text; use strong hashing algorithms.',
    ],
  },
  {
    id: '3',
    title: 'Authorization and Access Control',
    content: [
      'Implement role-based access control (RBAC) to restrict access to certain app features or data.',
      'Ensure users can only access their own data.',
    ],
  },
  {
    id: '4',
    title: 'Secure API Endpoints',
    content: [
      'Validate and sanitize input data to prevent SQL injection and other attacks.',
      'Implement rate limiting and throttling on API endpoints to prevent abuse.',
    ],
  },
  {
    id: '5',
    title: 'Session Management',
    content: [
      'Use secure session management techniques.',
      'Implement session timeouts and token rotation.',
    ],
  },
  {
    id: '6',
    title: 'Code Obfuscation',
    content: ['Obfuscate the code to make it harder for attackers to reverse engineer the app.'],
  },
  {
    id: '7',
    title: 'Data Validation',
    content: [
      'Validate all input data from users, including form data and URLs.',
      'Use input validation libraries to prevent common vulnerabilities.',
    ],
  },
  // {
  //   id: '8',
  //   title: 'Secure File Storage',
  //   content: [
  //     'Store sensitive files securely, encrypting them if necessary.',
  //     'Avoid storing sensitive data in plain text configuration files.',
  //   ],
  // },
  // {
  //   id: '9',
  //   title: 'Push Notification Security',
  //   content: [
  //     'Secure push notifications by using authentication and encryption.',
  //     'Ensure push notifications reveal minimal information.',
  //   ],
  // },
  // {
  //   id: '10',
  //   title: 'Network Security',
  //   content: [
  //     'Disable unnecessary network services.',
  //     'Use certificate pinning to protect against man-in-the-middle attacks.',
  //   ],
  // },
  // {
  //   id: '11',
  //   title: 'Error Handling',
  //   content: [
  //     'Implement custom error handling to avoid exposing sensitive information.',
  //     'Log errors securely and monitor logs for suspicious activity.',
  //   ],
  // },
  // {
  //   id: '12',
  //   title: 'Code Reviews and Static Analysis',
  //   content: [
  //     'Conduct regular code reviews to identify and fix security vulnerabilities.',
  //     'Use static analysis tools to scan the codebase for security issues.',
  //   ],
  // },
];

const darkThemeColors = {
  primary: '#00BFFF', // Deep Sky Blue
  buttonText: '#FFFFFF', // White text color for buttons
};
const AccordionList = () => {
  const navigation = useNavigation();
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.id;
    // console.log(item)

    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => toggleItem(item.id)}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            {isExpanded ? <FontAwesome5 name="angle-down" size={24} color="black" /> : <Entypo name="chevron-right" size={24} color="black" />}
             
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.content}>
            {item.content.map((detail, index) => (
              <Text key={index} style={styles.detail}>
                {detail}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <Text style={{fontWeight:'bold',marginBottom:6, marginTop:15}}>Security Checklist</Text>
      <FlatList
        data={securityDetails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
        <Button style={styles.button}
          title="More Security Checklist Items"
          color={darkThemeColors.primary}
         
          onPress={() => {
            // Navigate to the page with additional checklist items
            navigation.navigate('SecurityChecklist'); // Change this to the appropriate screen name
          }}
        />
    </>
  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#333333', // Dark gray background color
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomColor:"blue"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CCCCCC', // Light gray header text color
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#CCCCCC', // Light gray arrow icon color
  },
  content: {
    padding: 15,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#CCCCCC', // Light gray text color for checklist details
  },
  button: {
    backgroundColor: darkThemeColors.primary,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    
  },

});



export default AccordionList;
