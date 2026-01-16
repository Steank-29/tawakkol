import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Grid,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FlashOn,
  ShoppingBag,
  ArrowForward,
  LocalShipping,
  Shield,
  TrendingUp,
  CheckCircle
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

import heroImage from '../../assets/sport.png';
import jerseyImage from '../../assets/jersey.png';
import shortImage from '../../assets/short.png';
import sleevelessImage from '../../assets/sleeveless.png';
import hoodieImage from '../../assets/hoodie.png';
import pantsImage from '../../assets/pants.png';

/* =======================
   DESIGN TOKENS
======================= */
const colors = {
  black: '#0b0b0b',
  dark: '#121212',
  gold: '#d4af37',
  goldSoft: '#f4e4a6',
  white: '#ffffff',
  gradientGold: 'linear-gradient(135deg, #d4af37 0%, #f9d423 50%, #d4af37 100%)',
  gradientDark: 'linear-gradient(180deg, #121212 0%, #0b0b0b 100%)',
};

/* =======================
   DATA
======================= */
const stats = [
  { value: '1K+', label: 'Produits premium', icon: TrendingUp },
  { value: '50+', label: 'Marques sport', icon: Shield },
  { value: '10K+', label: 'Clients satisfaits', icon: LocalShipping },
];

const features = [
  'Livraison 24h gratuite',
  'Retours gratuits 30 jours',
  'Garantie qualité premium',
  'Support expert 7j/7',
  'Équipement certifié',
  'Paiement sécurisé'
];

const gridItems = [
  {
    id: 'a',
    title: 'T-SHIRTS',
    image: jerseyImage,
    link: '/details/tshirts',
    tag: 'Performance'
  },
  {
    id: 'b',
    title: 'SHORTS',
    image: shortImage,
    link: '/details/shorts',
    tag: 'Légèreté'
  },
  {
    id: 'c',
    title: 'HOODIES',
    image: hoodieImage,
    link: '/details/hoodies',
    tag: 'Confort'
  },
  {
    id: 'd',
    title: 'SLEEVELESS JERSEYS',
    image: sleevelessImage,
    link: '/details/sleeveless-jerseys',
    tag: 'Flexibilité'
  },
  {
    id: 'e',
    title: 'PANTS',
    image: pantsImage,
    link: '/details/pants',
    tag: 'Endurance'
  }
];

/* =======================
   COMPONENT
======================= */
export default function Sport() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <Box
      sx={{
        minHeight: '200vh',
        width: '99vw',
        background: colors.gradientDark,
        color: colors.white,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Right Side Full Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Background Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(90deg, ${colors.black} 0%, transparent 30%, transparent 100%),
              linear-gradient(180deg, ${colors.black} 0%, transparent 20%, transparent 100%)
            `,
            zIndex: 2,
          }}
        />
        
        {/* Gold Edge Glow */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '3px',
            background: colors.gradientGold,
            zIndex: 3,
            boxShadow: `
              0 0 30px ${colors.gold},
              0 0 60px ${alpha(colors.gold, 0.5)},
              0 0 90px ${alpha(colors.gold, 0.2)}
            `,
          }}
        />
        
        {/* Main Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Sport lifestyle"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
        
        {/* Subtle Noise Texture */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.03,
            mixBlendMode: 'overlay',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Background Effects - Left Side */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: { xs: 0, md: '50%' },
          bottom: 0,
          background: `radial-gradient(circle at 20% 40%, ${alpha(colors.gold, 0.08)} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 3, md: 6, lg: 8 },
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid 
          container 
          sx={{
            minHeight: '100vh',
            alignItems: 'center',
          }}
        >
          {/* LEFT CONTENT - 2/3 width */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box sx={{ 
                maxWidth: { md: '90%', lg: '85%' },
                mt: 6 // Added mt: 6 as requested
              }}>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Chip
                    icon={<FlashOn sx={{ fontSize: '1.1rem' }} />}
                    label="Équipement Sport Premium"
                    sx={{
                      mb: { xs: 3, md: 4 },
                      background: colors.gradientGold,
                      color: colors.black,
                      fontWeight: 900,
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      py: 1,
                      px: 2,
                      '& .MuiChip-icon': {
                        mr: 1,
                      },
                    }}
                  />
                </motion.div>

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  component={motion.h1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  sx={{
                    fontWeight: 900,
                    fontSize: { 
                      xs: '2.5rem', 
                      sm: '3rem', 
                      md: '3.5rem', 
                      lg: '4rem' 
                    },
                    lineHeight: 1.1,
                    mb: 3,
                    background: `linear-gradient(90deg, ${colors.white} 40%, ${colors.gold} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Performance
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldSoft})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Excellence & Innovation
                  </Box>
                </Typography>

                {/* Description */}
                <Typography
                  component={motion.p}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  sx={{
                    opacity: 0.85,
                    fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
                    lineHeight: 1.7,
                    mb: { xs: 4, md: 5 },
                    maxWidth: '90%',
                  }}
                >
                  Découvrez notre collection exclusive conçue pour les athlètes modernes. 
                  Des technologies avancées, des matériaux innovants et un design 
                  raffiné pour repousser vos limites.
                </Typography>

                {/* Features Grid */}
                <Grid container spacing={2} mb={{ xs: 4, md: 5 }}>
                  {features.map((item, index) => (
                    <Grid item xs={12} sm={6} key={item}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1.5}>
                          <CheckCircle 
                            sx={{ 
                              color: colors.gold,
                              fontSize: '1.1rem' 
                            }} 
                          />
                          <Typography
                            sx={{
                              color: colors.goldSoft,
                              fontSize: '0.95rem',
                              fontWeight: 500,
                            }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* CTA Buttons */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  mb={{ xs: 5, md: 6 }}
                >
                  <Button
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 10px 30px ${alpha(colors.gold, 0.4)}`
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    startIcon={<ShoppingBag />}
                    endIcon={<ArrowForward />}
                    sx={{
                      background: colors.gradientGold,
                      color: colors.black,
                      fontWeight: 800,
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.8, md: 2 },
                      borderRadius: 2,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      minWidth: { sm: 220 },
                      boxShadow: `0 5px 20px ${alpha(colors.gold, 0.3)}`,
                      zIndex: 2,
                      position: 'relative',
                    }}
                  >
                    Explorer la collection
                  </Button>

                  <Button
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: alpha(colors.gold, 0.12)
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    variant="outlined"
                    sx={{
                      borderColor: colors.gold,
                      color: colors.gold,
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.8, md: 2 },
                      borderRadius: 2,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      fontWeight: 600,
                      minWidth: { sm: 180 },
                      '&:hover': {
                        borderColor: colors.goldSoft,
                        background: alpha(colors.gold, 0.08),
                      },
                      zIndex: 2,
                      position: 'relative',
                    }}
                  >
                    Voir les nouveautés
                  </Button>
                </Stack>

                {/* Stats */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 3, sm: 4, md: 6 }}
                  flexWrap="wrap"
                  sx={{ position: 'relative', zIndex: 2 }}
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 2,
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              background: alpha(colors.gold, 0.1),
                              borderRadius: 2,
                              p: 1.5,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon sx={{ 
                              color: colors.gold,
                              fontSize: '1.8rem' 
                            }} />
                          </Box>
                          <Box>
                            <Typography 
                              fontWeight={900} 
                              color={colors.gold}
                              sx={{ 
                                fontSize: { xs: '1.8rem', md: '2rem' },
                                lineHeight: 1
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography 
                              fontSize="0.9rem" 
                              opacity={0.8}
                              sx={{ 
                                fontWeight: 500,
                                maxWidth: 120
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    );
                  })}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Empty column for spacing - Image is in background */}
          <Grid item xs={12} md={4} />
        </Grid>

        {/* =======================
           CENTERED TITLE SECTION
        ======================= */}
        <Box
          ref={titleRef}
          sx={{
            py: { xs: 8, md: 12 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: `radial-gradient(circle, ${alpha(colors.gold, 0.05)} 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            <Chip
              label="COLLECTIONS EXCLUSIVES"
              sx={{
                mb: 3,
                background: alpha(colors.gold, 0.15),
                color: colors.gold,
                fontWeight: 700,
                fontSize: '0.9rem',
                py: 1,
                px: 3,
                border: `1px solid ${alpha(colors.gold, 0.3)}`,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { 
                  xs: '2.2rem', 
                  sm: '2.8rem', 
                  md: '3.5rem',
                  lg: '4rem' 
                },
                lineHeight: 1.1,
                mb: 2,
                background: `linear-gradient(90deg, ${colors.white}, ${colors.gold})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              VÊTEMENTS DE
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: colors.gradientGold,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PERFORMANCE
              </Box>
            </Typography>

            <Typography
              sx={{
                opacity: 0.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
              }}
            >
              Découvrez nos collections premium conçues pour les athlètes qui repoussent leurs limites
            </Typography>
          </motion.div>
        </Box>

        {/* =======================
           GRID SECTION WITH ENHANCED CARDS
        ======================= */}
        <Box
          ref={gridRef}
          sx={{
            width: '100%',
            pb: { xs: 8, md: 12 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gridTemplateRows: {
                xs: 'repeat(5, minmax(200px, 1fr))',
                md: 'repeat(3, minmax(250px, 1fr))',
              },
              gridTemplateAreas: {
                xs: `
                  "a"
                  "b"
                  "c"
                  "d"
                  "e"
                `,
                md: `
                  "a c e"
                  "b c e"
                  "b d e"
                `,
              },
            }}
          >
            {gridItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isGridInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  y: 30, 
                  scale: 0.95 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                style={{
                  gridArea: item.id,
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 30px 80px ${alpha(colors.gold, 0.3)}`
                  }}
                  transition={{ duration: 0.4 }}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: `
                      0 20px 60px ${alpha(colors.black, 0.8)},
                      0 5px 15px ${alpha(colors.black, 0.4)},
                      inset 0 0 0 1px ${alpha(colors.gold, 0.1)}
                    `,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: `
                        linear-gradient(
                          180deg,
                          rgba(0,0,0,0.1) 0%,
                          rgba(0,0,0,0.9) 100%
                        )
                      `,
                      transition: '0.4s',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: colors.gradientGold,
                      opacity: 0,
                      transition: '0.4s',
                      mixBlendMode: 'overlay',
                    },
                    '&:hover::before': {
                      background: `
                        linear-gradient(
                          180deg,
                          rgba(0,0,0,0.05) 0%,
                          rgba(0,0,0,0.95) 100%
                        )
                      `,
                    },
                    '&:hover::after': {
                      opacity: 0.1,
                    },
                  }}
                >
                  {/* Tag Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 3,
                    }}
                  >
                    <Chip
                      label={item.tag}
                      size="small"
                      sx={{
                        background: alpha(colors.gold, 0.9),
                        color: colors.black,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </Box>

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: `linear-gradient(180deg, transparent 0%, ${alpha(colors.black, 0.9)} 100%)`,
                      zIndex: 2,
                    }}
                  />

                  {/* CENTER CONTENT */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                    <Typography
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                        fontWeight: 900,
                        color: colors.white,
                        mb: 3,
                        letterSpacing: 2,
                        textShadow: `0 2px 10px ${alpha(colors.black, 0.8)}`,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Button
                      component={motion.button}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 15px 40px ${alpha(colors.gold, 0.5)}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        background: colors.gradientGold,
                        color: colors.black,
                        fontWeight: 800,
                        px: 4,
                        py: 1.2,
                        borderRadius: 2,
                        fontSize: '0.9rem',
                        boxShadow: `0 10px 30px ${alpha(colors.gold, 0.4)}`,
                        '&:hover': {
                          background: colors.gradientGold,
                        },
                      }}
                      onClick={() => window.location.href = item.link}
                    >
                      Explorer
                    </Button>
                  </Box>

                  {/* Shine Effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(90deg, transparent, ${alpha(colors.white, 0.2)}, transparent)`,
                      zIndex: 2,
                      transition: '0.6s',
                    }}
                    className="shine-effect"
                  />
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* View All Button */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 6,
            }}
          >
            <Button
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 20px 50px ${alpha(colors.gold, 0.4)}`
              }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: colors.gold,
                color: colors.gold,
                px: 5,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderColor: colors.goldSoft,
                  background: alpha(colors.gold, 0.08),
                  borderWidth: 2,
                },
              }}
            >
              Voir toutes les collections
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}