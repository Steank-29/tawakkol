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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeV from '../../assets/Home_video.mp4';
import casual from '../../assets/slider/casual.jpg';
import official from '../../assets/slider/official.jpg';
import sport from '../../assets/slider/sport.jpg';
import religious from '../../assets/slider/religious.jpg';

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

  // Images for carousel
  const carouselImages = [
    { src: casual, title: 'Style Décontracté', subtitle: 'Élégance au quotidien' },
    { src: official, title: 'Tenue Officielle', subtitle: 'Sophistication et prestige' },
    { src: sport, title: 'Sport & Performance', subtitle: 'Performance et style' },
    { src: religious, title: 'Spiritualité', subtitle: 'Élégance sacrée' }
  ];

  // Carousel configuration
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
    <Box sx={{ width: '99vw', background: premiumColors.darkGradient }}>
      {/* === CAROUSEL SECTION === */}


      {/* === HÉRO AVEC VIDÉO PLEINE LARGEUR === */}
      <Box sx={{ 
        position: 'relative', 
        width: '99vw', 
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

            <Box sx={{ 
        position: 'relative', 
        width: '99vw',
        left: '50%', 
        right: '50%', 
        marginLeft: '-50vw', 
        marginRight: '-50vw',
        py: 8,
        background: `linear-gradient(180deg, ${premiumColors.charcoal} 0%, ${premiumColors.noir} 100%)`
      }}>
        <Container maxWidth="xl">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: premiumColors.premiumGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textAlign: 'center',
                mb: 2,
                textShadow: `0 5px 15px ${premiumColors.gold}20`
              }}
            >
              Collections Exclusives
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: premiumColors.goldLight,
                textAlign: 'center',
                mb: 6,
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                opacity: 0.9
              }}
            >
              Découvrez nos univers soigneusement sélectionnés pour chaque occasion
            </Typography>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="transform 600ms ease-in-out"
              transitionDuration={600}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
              removeArrowOnDeviceType={['mobile']}
              dotListClass="custom-dot-list-style"
              showDots={true}
              arrows={!isMobile}
              renderDotsOutside={true}
              swipeable={true}
              draggable={true}
            >
              {carouselImages.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 300, md: 400 },
                      margin: 2,
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: `0 20px 40px ${premiumColors.gold}20`,
                      border: `1px solid ${premiumColors.gold}30`,
                      '&:hover': {
                        boxShadow: `0 25px 50px ${premiumColors.gold}30`,
                        '& .carousel-overlay': {
                          opacity: 1,
                          background: `linear-gradient(0deg, ${premiumColors.noir}CC 0%, ${premiumColors.noir}00 100%)`
                        },
                        '& .carousel-content': {
                          transform: 'translateY(0)',
                          opacity: 1
                        }
                      },
                      transition: 'all 0.4s ease-in-out'
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    
                    {/* Overlay */}
                    <Box 
                      className="carousel-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(0deg, ${premiumColors.noir}99 0%, ${premiumColors.noir}00 50%)`,
                        opacity: 0.7,
                        transition: 'all 0.4s ease-in-out'
                      }}
                    />
                    
                    {/* Content */}
                    <Box 
                      className="carousel-content"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: 4,
                        transform: 'translateY(20px)',
                        opacity: 0.8,
                        transition: 'all 0.4s ease-in-out'
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: premiumColors.white,
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          fontSize: { xs: '1.5rem', md: '1.8rem' },
                          mb: 1
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: premiumColors.goldLight,
                          fontFamily: "'Playfair Display', serif",
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          opacity: 0.9
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Carousel>
          </motion.div>
        </Container>
      </Box>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .carousel-container {
          position: relative;
        }
        
        .carousel-item-padding-40-px {
          padding: 10px;
        }
        
        .custom-dot-list-style {
          margin-top: 20px;
        }
        
        .react-multi-carousel-dot button {
          border: 2px solid ${premiumColors.gold};
          background: transparent;
          width: 12px;
          height: 12px;
        }
        
        .react-multi-carousel-dot--active button {
          background: ${premiumColors.gold};
        }
        
        .react-multiple-carousel__arrow {
          background: ${premiumColors.gold};
          border: 2px solid ${premiumColors.goldDark};
        }
        
        .react-multiple-carousel__arrow:hover {
          background: ${premiumColors.goldDark};
        }
        
        .react-multiple-carousel__arrow::before {
          color: ${premiumColors.noir};
          font-weight: bold;
        }
      `}</style>
    </Box>
  );
};

export default Home;