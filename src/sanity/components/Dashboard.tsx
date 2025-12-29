import React from 'react'
import { Card, Grid, Heading, Text, Flex, Box, Stack, Button, useTheme } from '@sanity/ui'
import { EditIcon, EarthGlobeIcon } from '@sanity/icons'

const Dashboard = () => {
  const theme = useTheme()
  const isDark = theme.sanity.color.dark

  // Colors based on user request
  const cardBg = isDark ? '#1E1E1E' : '#FFFFFF'
  const cardBorder = isDark ? '1px solid #333' : '1px solid #e0e0e0'
  const accentColor = '#3B82F6'

  return (
    <Box padding={[4, 5, 6]} style={{ minHeight: '100vh', background: isDark ? '#121212' : '#f9fafb' }}> 
      <Stack space={6}>
        
        {/* Header Section */}
        <Stack space={3}>
          <Box>
             <Text size={1} muted weight="medium" style={{ marginLeft: '1px' }}>
                Dashboard Overview
             </Text>
          </Box>
          <Box>
            <Heading size={4} weight="bold" style={{ color: isDark ? '#E1E1E1' : '#111' }}>Dashboard</Heading>
            <Box marginTop={3}>
              <Text size={2} muted>Welcome to the PulseQuik Admin Dashboard.</Text>
            </Box>
          </Box>
        </Stack>

        {/* Main Grid */}
        <Grid columns={[1, 1, 2]} gap={[5, 6, 7]}>
          
          {/* Manage Blogs Card */}
          <Card 
            radius={3} 
            padding={[5, 6]} 
            style={{ 
              backgroundColor: cardBg,
              border: cardBorder,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Flex direction="column" height="fill" justify="space-between" gap={5}>
              <Stack space={4}>
                 <Flex 
                    align="center" 
                    justify="center" 
                    style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '16px', 
                        background: isDark ? `rgba(59, 130, 246, 0.15)` : '#EFF6FF', 
                        color: accentColor
                    }}
                 >
                    <EditIcon style={{ fontSize: '28px' }} />
                 </Flex>
                 
                 <Stack space={3}>
                    <Heading size={3} weight="semibold" style={{ color: isDark ? '#fff' : '#111' }}>Manage Blogs</Heading>
                    <Text size={2} muted style={{ lineHeight: '1.6' }}>Create, edit, and publish blog posts efficiently.</Text>
                 </Stack>
              </Stack>
              
              <Box marginTop={4}>
                <Button 
                    as="a" 
                    href="/studio/structure/blogs" 
                    tone="primary" 
                    mode="default" 
                    padding={4} 
                    radius={3} 
                    fontSize={2}
                    text="Go to Blogs" 
                    width="fill"
                    style={{ background: accentColor, borderColor: accentColor }}
                />
              </Box>
            </Flex>
          </Card>

          {/* View Website Card */}
          <Card 
            radius={3} 
            padding={[5, 6]} 
            style={{ 
              backgroundColor: cardBg,
              border: cardBorder,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Flex direction="column" height="fill" justify="space-between" gap={5}>
              <Stack space={4}>
                 <Flex 
                    align="center" 
                    justify="center" 
                    style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '16px', 
                        background: isDark ? `rgba(16, 185, 129, 0.15)` : '#ECFDF5', 
                        color: '#10B981'
                    }}
                 >
                    <EarthGlobeIcon style={{ fontSize: '28px' }} />
                 </Flex>
                 
                 <Stack space={3}>
                    <Heading size={3} weight="semibold" style={{ color: isDark ? '#fff' : '#111' }}>View Live Website</Heading>
                    <Text size={2} muted style={{ lineHeight: '1.6' }}>Preview your content on the live production site.</Text>
                 </Stack>
              </Stack>
              
              <Box marginTop={4}>
                <Button 
                    as="a" 
                    href="/" 
                    target="_blank"
                    mode="ghost"
                    padding={4}
                    radius={3} 
                    fontSize={2}
                    text="Visit Site" 
                    width="fill"
                     style={{ 
                        color: isDark ? '#fff' : '#333',
                        borderColor: isDark ? '#444' : '#e0e0e0'
                    }}
                />
              </Box>
            </Flex>
          </Card>

        </Grid>
      </Stack>
    </Box>
  )
}

export default Dashboard
