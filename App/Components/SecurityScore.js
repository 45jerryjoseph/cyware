import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

const darkThemeColors = {
  background: '#121212',
  text: '#FFFFFF',
  accent: '#FFA500',
  primary: '#00BFFF',
  secondary: '#FF6347',
  link: '#4CAF50',
  inactive: '#808080',
  error: '#FF0000',
  success: '#008000',
};

const securityScores = [
  { category: 'Password Management', score: 8 },
  { category: 'Authentication Practices', score: 9 },
  { category: 'Email Security', score: 7 },
  { category: 'Software Updates', score: 8 },
  { category: 'Safe Browsing', score: 9 },
  { category: 'Device Security', score: 7 },
  { category: 'Data Protection', score: 8 },
  { category: 'Social Media Privacy', score: 7 },
  { category: 'Network Security', score: 9 },
  { category: 'Awareness and Education', score: 8 },
  { category: 'Incident Response', score: 9 },
  { category: 'Overall Cybersecurity Hygiene', score: 85 },
  // Add more categories and scores as needed
];

const calculateOverallScore = (scores) => {
  const totalScore = scores.reduce((sum, item) => sum + item.score, 0);
  return totalScore;
};

const SecurityScore = () => {
  const overallScore = calculateOverallScore(securityScores);

  return (
    <>
    <Text style={{fontSize:30,fontWeight:'bold',marginBottom:6, marginTop:15}}>Security Scores</Text>
    <ScrollView 
    style={[styles.container, 
      { backgroundColor: darkThemeColors.background }]}
    nestedScrollEnabled={true}
    showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.header, { color: darkThemeColors.text }]}>Security Score</Text>
      <View style={styles.scoreContainer}>
        <Text style={[styles.scoreLabel, { color: darkThemeColors.text }]}>Overall Score</Text>
        <Text style={[styles.scoreValue, { color: darkThemeColors.accent }]}>{overallScore}</Text>
      </View>
      <View style={styles.categoryContainer}>
        {securityScores.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={[styles.categoryLabel, { color: darkThemeColors.text }]}>{item.category}</Text>
            <View style={[styles.scoreMarkContainer, { backgroundColor: darkThemeColors.primary }]}>
              <Text style={[styles.scoreMark, { color: darkThemeColors.text }]}>{item.score}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    height:400,
    marginTop:15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  categoryLabel: {
    fontSize: 20,
    flex: 2,
  },
  scoreMarkContainer: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  scoreMark: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecurityScore;
