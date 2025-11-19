import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
  Fade,
  useTheme,
  useMediaQuery,
  alpha,
  Stack
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  ShoppingBag,
  Diamond,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import HomeV from '../../assets/Home_video.mp4'

// === PALETTE DE COULEURS PREMIUM ===
const premiumColors = {
  noir: '#0a0a0a',
  gold: '#d4af37',
  goldLight: '#f4e4a6',
  goldDark: '#b8941f',
  charcoal: '#1a1a1a',
  white: '#ffffff',
  premiumGradient: 'linear-gradient(135deg, #d4af37 0%, #f9d423 50%, #d4af37 100%)',
  darkGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
};

const Home = () => {
  const [lectureEnCours, setLectureEnCours] = useState(true);
  const [sonActif, setSonActif] = useState(false);
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Contrôle de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      if (lectureEnCours) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [lectureEnCours]);

  const basculerLecture = () => setLectureEnCours(!lectureEnCours);
  const basculerSon = () => setSonActif(!sonActif);

  const faireDefilerVers = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ width: '100vw', height: '90vh', background: premiumColors.darkGradient }}>
      {/* === HÉRO AVEC VIDÉO PLEINE LARGEUR === */}
      <Box sx={{ 
        position: 'relative', 
        width: '100vw', 
        height: '90vh',
        left: '50%', 
        right: '50%', 
        marginLeft: '-50vw', 
        marginRight: '-50vw' 
      }}>
        {/* Vidéo de fond */}
        <video
          ref={videoRef}
          muted={!sonActif}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <source src={HomeV} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>

        {/* Superposition de la vidéo */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(45deg, ${premiumColors.noir}DD 0%, ${premiumColors.charcoal}99 50%, ${premiumColors.noir}DD 100%)`,
          zIndex: 2
        }} />

        {/* Contenu principal */}
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Fade in timeout={1200}>
                <Box>
                  <Chip
                    icon={<Diamond sx={{ fontSize: 18 }} />}
                    label="Marketplace de Luxe"
                    sx={{
                      background: premiumColors.premiumGradient,
                      color: premiumColors.noir,
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      fontFamily: "'Playfair Display', serif",
                      mb: 1,
                      px: 3,
                      py: 1.5,
                      ml: 2,
                      boxShadow: `0 8px 25px ${premiumColors.gold}30`
                    }}
                  />
                  
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 900,
                      fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
                      background: premiumColors.premiumGradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      lineHeight: 1.05,
                      mb: 1,
                      letterSpacing: { xs: '-1px', lg: '-3px' },
                      textShadow: `0 5px 15px ${premiumColors.gold}20`,
                      ml: 2,
                    }}
                  >
                    L'Excellence
                    <br />
                    <Box component="span" sx={{ color: premiumColors.white, textShadow: `0 5px 15px ${premiumColors.gold}30` }}>
                      Redéfinie
                    </Box>
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: premiumColors.goldLight,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: '1.2rem', lg: '1.6rem' },
                      mb: 2,
                      maxWidth: '600px',
                      lineHeight: 1.5,
                      opacity: 0.95,
                      ml: 2,
                    }}
                  >
                    Découvrez une collection exclusive de produits de luxe soigneusement sélectionnés par des artisans d'exception.
                  </Typography>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 2, ml: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => faireDefilerVers('produits')}
                      startIcon={<ShoppingBag />}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: premiumColors.premiumGradient,
                        color: premiumColors.noir,
                        py: 2.5,
                        px: 5,
                        borderRadius: 3,
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        boxShadow: `0 15px 40px ${premiumColors.gold}40`,
                        minWidth: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          background: `linear-gradient(45deg, ${premiumColors.goldLight}, ${premiumColors.gold})`,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 25px 60px ${premiumColors.gold}50`
                        },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      Découvrir la Collection
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => faireDefilerVers('avantages')}
                      sx={{
                        border: `2px solid ${premiumColors.gold}`,
                        color: premiumColors.gold,
                        py: 2.5,
                        px: 4,
                        borderRadius: 3,
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        background: alpha(premiumColors.gold, 0.08),
                        minWidth: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          background: alpha(premiumColors.gold, 0.15),
                          border: `2px solid ${premiumColors.goldLight}`,
                          color: premiumColors.goldLight,
                          transform: 'translateY(-3px)'
                        },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      En Savoir Plus
                    </Button>
                  </Stack>

                  {/* Statistiques */}
                  <Stack direction="row" spacing={4} sx={{ opacity: 0.9, ml: 2 }}>
                    {[
                      { nombre: "10K+", label: "Clients Satisfaits" },
                      { nombre: "500+", label: "Marques Premium" },
                      { nombre: "50+", label: "Pays Desservis" }
                    ].map((stat, index) => (
                      <Box key={index}>
                        <Typography sx={{ 
                          color: premiumColors.gold, 
                          fontSize: '1.4rem', 
                          fontWeight: 800,
                          fontFamily: "'Fjalla One', sans-serif"
                        }}>
                          {stat.nombre}
                        </Typography>
                        <Typography sx={{ 
                          color: premiumColors.goldLight, 
                          fontSize: '0.9rem',
                          fontFamily: "'Fjalla One', sans-serif"
                        }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        {/* Contrôles vidéo */}
        <Box sx={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          zIndex: 4,
          display: 'flex',
          gap: 2
        }}>
          <IconButton
            onClick={basculerLecture}
            sx={{
              background: alpha(premiumColors.noir, 0.7),
              color: premiumColors.gold,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${premiumColors.gold}30`,
              width: 56,
              height: 56,
              '&:hover': {
                background: alpha(premiumColors.noir, 0.9),
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {lectureEnCours ? <Pause /> : <PlayArrow />}
          </IconButton>

          <IconButton
            onClick={basculerSon}
            sx={{
              background: alpha(premiumColors.noir, 0.7),
              color: premiumColors.gold,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${premiumColors.gold}30`,
              width: 56,
              height: 56,
              '&:hover': {
                background: alpha(premiumColors.noir, 0.9),
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {sonActif ? <VolumeUp /> : <VolumeOff />}
          </IconButton>
        </Box>
      </Box>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default Home;