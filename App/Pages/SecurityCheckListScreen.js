// SecurityChecklistScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Import your securityDetails array here
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
    {
      id: '8',
      title: 'Secure File Storage',
      content: [
        'Store sensitive files securely, encrypting them if necessary.',
        'Avoid storing sensitive data in plain text configuration files.',
      ],
    },
    {
      id: '9',
      title: 'Push Notification Security',
      content: [
        'Secure push notifications by using authentication and encryption.',
        'Ensure push notifications reveal minimal information.',
      ],
    },
    {
      id: '10',
      title: 'Network Security',
      content: [
        'Disable unnecessary network services.',
        'Use certificate pinning to protect against man-in-the-middle attacks.',
      ],
    },
    {
      id: '11',
      title: 'Error Handling',
      content: [
        'Implement custom error handling to avoid exposing sensitive information.',
        'Log errors securely and monitor logs for suspicious activity.',
      ],
    },
    {
      id: '12',
      title: 'Code Reviews and Static Analysis',
      content: [
        'Conduct regular code reviews to identify and fix security vulnerabilities.',
        'Use static analysis tools to scan the codebase for security issues.',
      ],
    },
    {
      id: '13',
      title: 'Regular Updates',
      content: [
        'Keep the app and its dependencies up to date with security patches.',
        'Prompt users to update the app when new versions are available.',
      ],
    },
    {
      id: '14',
      title: 'Secure Backend',
      content: [
        'Ensure the backend server is also secure and follows best practices.',
        'Implement strong server-side security measures.',
      ],
    },
    {
      id: '15',
      title: 'Secure Data Transmission',
      content: [
        'Use secure communication protocols (TLS/SSL) for data transmission.',
        'Avoid transmitting sensitive data over unsecured channels.',
      ],
    },
    {
      id: '16',
      title: 'User Education',
      content: [
        'Educate users about security best practices, such as using strong passwords and enabling MFA.',
        'Provide clear guidance on how to report security issues or suspicious activity.',
      ],
    },
    {
      id: '17',
      title: 'Penetration Testing',
      content: [
        'Regularly conduct penetration testing to identify vulnerabilities in the app.',
        'Address and fix any identified issues promptly.',
      ],
    },
    {
      id: '18',
      title: 'Compliance with Regulations',
      content: [
        'Ensure compliance with relevant data protection regulations (e.g., GDPR, HIPAA) if applicable.',
      ],
    },
    {
      id: '19',
      title: 'Incident Response Plan',
      content: [
        'Develop a response plan for security incidents and data breaches.',
        'Communicate clearly with users in the event of a breach.',
      ],
    },
    {
      id: '20',
      title: 'Third-Party Libraries and SDKs',
      content: [
        'Review and vet third-party libraries and SDKs for security vulnerabilities.',
        'Keep them updated to the latest secure versions.',
      ],
    },
    {
      id: '21',
      title: 'Secure Offline Mode',
      content: [
        'Implement security measures for offline usage of the app, including data encryption.',
      ],
    },
    {
      id: '22',
      title: 'Geolocation and Privacy',
      content: [
        'Request user permission for accessing location data and ensure it\'s used responsibly and securely.',
      ],
    },
    {
      id: '23',
      title: 'Device Security',
      content: [
        'Protect against rooted or jailbroken devices to maintain app security.',
      ],
    },
    {
      id: '24',
      title: 'Backup and Restore',
      content: [
        'Ensure that backup and restore functionalities are secure and do not expose sensitive data.',
      ],
    },
  ];
  
const darkThemeColors = {
  primary: '#00BFFF', // Deep Sky Blue
  buttonText: '#FFFFFF', // White text color for buttons
};
const SecurityChecklistScreen = ({ navigation }) => {
    const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };
  const renderItem = ({ item }) => {
    // Render your checklist items here
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
    <ScrollView  >
      <Text style={{ fontSize: 30,textAlign: "center", fontWeight: 'bold', marginBottom: 6, marginTop: 15 }}>
        Additional Security Checklist
      </Text>
      <FlatList
        data={securityDetails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="More Checklist Items"
        onPress={() => {
          // Navigate to the page with additional checklist items
          navigation.navigate('AdditionalChecklist'); // Change this to the appropriate screen name
        }}
      />
    </ScrollView>
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
  
export default SecurityChecklistScreen;
