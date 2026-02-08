import React, { useRef, useState } from 'react';
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
  useMediaQuery,
  IconButton,
  Card,
  CardContent,
  Rating,
  Avatar,
  AvatarGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  LinearProgress,
  Divider,
  Badge
} from '@mui/material';
import {
  ShoppingBag,
  ArrowForward,
  LocalShipping,
  Shield,
  CheckCircle,
  Star,
  Favorite,
  Compare,
  Groups,
  Timer,
  Close,
  Verified,
  Diamond,
  WorkspacePremium,
  Loyalty,
  LocalFireDepartment,
  Person,
  MenuBook,
  NightsStay,
  Palette,
  Security,
  Mosque,
  Psychology,
  Spa,
  WorkspacePremium as Quality
} from '@mui/icons-material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SwipeableViews from 'react-swipeable-views';

// Import Islamic clothing images - Update these paths with your actual images
import heroImage from '../../assets/islamic.jpeg';
import qamisImage from '../../assets/Qamiss.jpeg';
import thobeImage from '../../assets/Qachabeeya.jpeg';
import hijabImage from '../../assets/ISPants.jpeg';
import islamicPattern from '../../assets/full.jpeg';
import mosqueImage from '../../assets/Qamiss.jpeg';

/* =======================
   ENHANCED DESIGN TOKENS - ISLAMIC THEME
======================= */
const colors = {
  green: '#2E8B57',
  gold: '#D4AF37',
  dark: '#0F172A',
  cream: '#F5F5DC',
  lightGreen: '#90EE90',
  white: '#FFFFFF',
  gradientGreen: 'linear-gradient(135deg, #2E8B57 0%, #32CD32 100%)',
  gradientGold: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
  gradientDark: 'linear-gradient(180deg, #0F172A 0%, #020617 100%)',
};

/* =======================
   ENHANCED DATA - ISLAMIC CONTEXT
======================= */
const premiumStats = [
  { value: '100%', label: 'Halal Compliant', icon: Security, sub: 'Certified materials' },
  { value: '500+', label: 'Islamic Designs', icon: MenuBook, sub: 'Traditional patterns' },
  { value: '10K+', label: 'Community', icon: Groups, sub: 'Trusted by Ummah' },
  { value: '48h', label: 'Fast Delivery', icon: Timer, sub: 'Discreet packaging' },
];

const premiumFeatures = [
  { icon: Security, text: 'Halal Certified Fabrics', sub: 'Ethically sourced' },
  { icon: Shield, text: 'Premium Quality Guarantee', sub: '3-year warranty' },
  { icon: NightsStay, text: 'Modest Design', sub: 'Sunnah inspired' },
  { icon: LocalShipping, text: 'Global Free Shipping', sub: 'Over €100' },
  { icon: Palette, text: 'Traditional Patterns', sub: 'Handcrafted details' },
  { icon: Person, text: 'Prayer Comfort Fit', sub: 'Perfect for salah' },
];

const performanceComparison = [
  {
    feature: 'Fabric Quality',
    standard: 'Regular Cotton',
    premium: 'Premium Egyptian',
    improvement: '3x softer'
  },
  {
    feature: 'Comfort',
    standard: 'Good',
    premium: 'Excellent',
    improvement: 'Prayer-friendly'
  },
  {
    feature: 'Durability',
    standard: '1 year',
    premium: '5 years',
    improvement: 'Guaranteed'
  },
  {
    feature: 'Design',
    standard: 'Basic',
    premium: 'Traditional',
    improvement: 'Authentic patterns'
  }
];

const sizeGuide = [
  { size: 'S', chest: '91-97cm', length: '120-125cm', fit: 'Regular' },
  { size: 'M', chest: '97-102cm', length: '125-130cm', fit: 'Regular' },
  { size: 'L', chest: '102-107cm', length: '130-135cm', fit: 'Classic' },
  { size: 'XL', chest: '107-112cm', length: '135-140cm', fit: 'Classic' },
  { size: 'XXL', chest: '112-117cm', length: '140-145cm', fit: 'Comfort' }
];

const limitedEditions = [
  { id: 1, name: 'Eid Collection 1446', remaining: 12, tag: 'Limited' },
  { id: 2, name: 'Hajj Premium Set', remaining: 8, tag: 'Exclusive' },
  { id: 3, name: 'Ramadan Bundle', remaining: 5, tag: 'Last Chance' }
];

const gridItems = [
  {
    id: 'a',
    title: 'QAMIS',
    arabic: 'القميص',
    image: qamisImage,
    link: '/catalog',
    tag: 'Traditional',
    price: '€129',
    material: 'Premium Egyptian Cotton',
    weight: '280g'
  },
  {
    id: 'b',
    title: 'THOBE',
    arabic: 'الثوب',
    image: thobeImage,
    link: '/catalog',
    tag: 'Modern',
    price: '€149',
    material: 'Luxury Linen Blend',
    weight: '320g'
  },
  {
    id: 'c',
    title: 'HIJAB SET',
    arabic: 'الحجاب',
    image: hijabImage,
    link: '/catalog',
    tag: 'Elegant',
    price: '€89',
    material: 'Chiffon & Crepe',
    weight: '120g'
  },
  {
    id: 'd',
    title: 'PRAYER SET',
    arabic: 'مجموعة الصلاة',
    image: islamicPattern,
    link: '/catalog',
    tag: 'Bundle',
    price: '€199',
    material: 'Complete Collection',
    weight: '680g'
  }
];

/* =======================
   PREMIUM SUB-COMPONENTS
======================= */
const ProductShowcase3D = ({ product }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: '100%',
        height: 300,
        position: 'relative',
        cursor: 'grab',
        '&:active': { cursor: 'grabbing' }
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setRotation({ x, y });
      }}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{
          rotateY: rotation.x,
          rotateX: rotation.y
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}
      >
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: colors.gradientDark,
            borderRadius: 3,
            overflow: 'hidden',
            border: `2px solid ${alpha(colors.green, 0.3)}`,
            boxShadow: `0 20px 40px ${alpha(colors.dark, 0.8)}`
          }}
        >
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.02, 1],
              x: rotation.x * 0.05,
              y: rotation.y * 0.05
            }}
            transition={{ duration: 4, repeat: Infinity }}
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              backgroundColor: colors.cream
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                background: alpha(colors.dark, 0.8),
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                p: 1.5,
                border: `1px solid ${alpha(colors.green, 0.2)}`
              }}
            >
              <Stack spacing={0.5}>
                <Typography variant="caption" sx={{ color: colors.green, fontWeight: 600 }}>
                  {product.material}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.white, opacity: 0.8 }}>
                  Weight: {product.weight}
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                right: '20%',
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: alpha(colors.green, 0.2),
                border: `1px solid ${colors.green}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': {
                  background: alpha(colors.green, 0.4),
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Security sx={{ fontSize: 16, color: colors.green }} />
            </Box>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'flex',
              gap: 0.5,
              flexDirection: 'column'
            }}
          >
            {['Halal Certified', 'Premium Quality'].map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                size="small"
                sx={{
                  background: alpha(colors.green, 0.9),
                  color: colors.white,
                  fontWeight: 700,
                  fontSize: '0.6rem',
                  backdropFilter: 'blur(10px)'
                }}
              />
            ))}
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
};

const PerformanceComparisonTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: alpha(colors.dark, 0.6),
        backdropFilter: 'blur(10px)',
        border: `1px solid ${alpha(colors.green, 0.2)}`,
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <Table size="small">
        <TableBody>
          {performanceComparison.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:hover': {
                  background: alpha(colors.green, 0.05)
                }
              }}
            >
              <TableCell sx={{ borderColor: alpha(colors.green, 0.1), color: colors.cream, py: 1.5 }}>
                <Typography fontSize="0.9rem" fontWeight={600}>{row.feature}</Typography>
              </TableCell>
              <TableCell sx={{ borderColor: alpha(colors.green, 0.1), color: alpha(colors.cream, 0.6), py: 1.5, fontSize: '0.85rem' }}>
                {row.standard}
              </TableCell>
              <TableCell sx={{ borderColor: alpha(colors.green, 0.1), color: colors.green, py: 1.5 }}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Typography fontSize="0.85rem" fontWeight={700}>{row.premium}</Typography>
                  <ArrowForward sx={{ fontSize: 14, color: colors.green }} />
                </Stack>
              </TableCell>
              <TableCell sx={{ borderColor: alpha(colors.green, 0.1), py: 1.5 }}>
                <Chip
                  label={row.improvement}
                  size="small"
                  sx={{
                    background: alpha(colors.green, 0.2),
                    color: colors.green,
                    fontWeight: 600,
                    fontSize: '0.7rem'
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SizeGuideModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        sx: {
          background: colors.gradientDark,
          border: `2px solid ${colors.green}`,
          borderRadius: 3
        }
      }}
    >
      <DialogTitle sx={{ color: colors.green, borderBottom: `1px solid ${alpha(colors.green, 0.2)}`, py: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700}>
            Islamic Fit Guide
          </Typography>
          <IconButton onClick={onClose} size="small" sx={{ color: colors.green }}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ py: 2 }}>
          <TableContainer>
            <Table size="small">
              <TableBody>
                {sizeGuide.map((size, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:hover': {
                        background: alpha(colors.green, 0.05)
                      }
                    }}
                  >
                    <TableCell sx={{ color: colors.green, fontWeight: 700, fontSize: '0.9rem' }}>
                      {size.size}
                    </TableCell>
                    <TableCell sx={{ color: colors.cream, fontSize: '0.9rem' }}>{size.chest}</TableCell>
                    <TableCell sx={{ color: colors.cream, fontSize: '0.9rem' }}>{size.length}</TableCell>
                    <TableCell>
                      <Chip
                        label={size.fit}
                        size="small"
                        sx={{
                          background: alpha(colors.green, 0.2),
                          color: colors.green,
                          fontSize: '0.75rem'
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Card
            sx={{
              background: alpha(colors.green, 0.1),
              border: `1px solid ${alpha(colors.green, 0.3)}`,
              borderRadius: 2,
              p: 2
            }}
          >
            <Stack spacing={1.5}>
              <Typography variant="subtitle2" color={colors.green} fontWeight={700}>
                🕌 Personalized Fit Recommendation
              </Typography>
              <Typography color={colors.cream} opacity={0.9} fontSize="0.9rem">
                Our experts analyze traditional measurements for perfect prayer comfort.
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: colors.gradientGreen,
                  color: colors.white,
                  fontWeight: 700,
                  alignSelf: 'flex-start',
                  fontSize: '0.85rem'
                }}
              >
                Get Perfect Fit
              </Button>
            </Stack>
          </Card>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

/* =======================
   MAIN COMPONENT - ENHANCED
======================= */
export default function Religion() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [liveInventory, setLiveInventory] = useState(limitedEditions);
  const [selectedProduct, setSelectedProduct] = useState(gridItems[0]);

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.3 });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const updateInventory = (id) => {
    setLiveInventory(prev =>
      prev.map(item =>
        item.id === id ? { ...item, remaining: Math.max(0, item.remaining - 1) } : item
      )
    );
  };

  return (
    <Box
      sx={{
        minHeight: '250vh',
        width: '99vw',
        background: colors.gradientDark,
        color: colors.cream,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating Cart Preview */}
      {cartItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000
          }}
        >
          <Card
            sx={{
              background: alpha(colors.dark, 0.95),
              backdropFilter: 'blur(20px)',
              border: `2px solid ${colors.green}`,
              borderRadius: 2,
              p: 1.5,
              boxShadow: `0 10px 30px ${alpha(colors.dark, 0.8)}`
            }}
          >
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <ShoppingBag sx={{ color: colors.green, fontSize: 18 }} />
                <Typography color={colors.cream} fontWeight={600} fontSize="0.9rem">
                  Islamic Collection ({cartItems.length})
                </Typography>
              </Stack>
              <AvatarGroup max={3}>
                {cartItems.slice(0, 3).map((item, idx) => (
                  <Avatar
                    key={idx}
                    src={item.image}
                    sx={{ width: 28, height: 28, border: `2px solid ${colors.green}` }}
                  />
                ))}
              </AvatarGroup>
              <Button
                size="small"
                sx={{
                  background: colors.gradientGreen,
                  color: colors.white,
                  fontWeight: 700,
                  fontSize: '0.8rem'
                }}
              >
                Complete Order (€{cartItems.length * 129})
              </Button>
            </Stack>
          </Card>
        </motion.div>
      )}

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
              linear-gradient(90deg, ${colors.dark} 0%, transparent 30%, transparent 100%),
              linear-gradient(180deg, ${colors.dark} 0%, transparent 60%, transparent 100%)
            `,
            zIndex: 2,
          }}
        />
        
        {/* Green Edge Glow */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '3px',
            background: colors.gradientGreen,
            zIndex: 3,
            boxShadow: `
              0 0 30px ${colors.green},
              0 0 60px ${alpha(colors.green, 0.5)},
              0 0 90px ${alpha(colors.green, 0.2)}
            `,
          }}
        />
        
        {/* Main Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Islamic modest fashion"
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
        
        {/* Subtle Islamic Pattern Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232E8B57' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.1,
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
          background: `radial-gradient(circle at 20% 40%, ${alpha(colors.green, 0.08)} 0%, transparent 70%)`,
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
        {/* =======================
           HERO SECTION - ENHANCED
        ======================= */}
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
                mt: 6
              }}>
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Chip
                    icon={<Security sx={{ fontSize: '1.1rem' }} />}
                    label="HALAL CERTIFIED • MODEST WEAR"
                    sx={{
                      mb: { xs: 3, md: 4 },
                      background: colors.gradientGreen,
                      color: colors.white,
                      fontWeight: 900,
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
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
                      xs: '2.2rem', 
                      sm: '2.8rem', 
                      md: '3.2rem', 
                      lg: '3.8rem' 
                    },
                    lineHeight: 1.1,
                    mb: 3,
                    background: `linear-gradient(90deg, ${colors.cream} 40%, ${colors.green} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Elevate Your
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
                    Islamic Modesty
                  </Box>
                </Typography>

                {/* Premium Description */}
                <Typography
                  component={motion.p}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  sx={{
                    opacity: 0.9,
                    fontSize: { xs: '0.95rem', md: '1.05rem', lg: '1.15rem' },
                    lineHeight: 1.7,
                    mb: { xs: 4, md: 5 },
                    maxWidth: '90%',
                  }}
                >
                  Traditional craftsmanship meets modern modest wear. Premium Islamic clothing 
                  designed with devotion for the discerning believer. 
                  <Box component="span" sx={{ color: colors.green, fontWeight: 700 }}>
                    {' '}Experience prayer in perfect comfort.
                  </Box>
                </Typography>

                {/* Premium Features Grid */}
                <Grid container spacing={2} mb={{ xs: 4, md: 5 }}>
                  {premiumFeatures.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={feature.text}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <Card
                          sx={{
                            background: alpha(colors.dark, 0.6),
                            border: `1px solid ${alpha(colors.green, 0.2)}`,
                            borderRadius: 2,
                            p: 2,
                            height: '100%',
                            transition: 'all 0.3s',
                            '&:hover': {
                              borderColor: colors.green,
                              transform: 'translateY(-2px)',
                              boxShadow: `0 10px 20px ${alpha(colors.green, 0.2)}`
                            }
                          }}
                        >
                          <Stack spacing={1}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <feature.icon sx={{ color: colors.green, fontSize: '1.2rem' }} />
                              <Typography
                                sx={{
                                  color: colors.cream,
                                  fontWeight: 600,
                                  fontSize: '0.9rem'
                                }}
                              >
                                {feature.text}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                color: alpha(colors.green, 0.8),
                                fontSize: '0.75rem',
                                opacity: 0.8
                              }}
                            >
                              {feature.sub}
                            </Typography>
                          </Stack>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Premium CTA Buttons */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  mb={{ xs: 5, md: 6 }}
                >
                  <Button
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 15px 30px ${alpha(colors.green, 0.4)}`
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    startIcon={<Security />}
                    endIcon={<ArrowForward />}
                    sx={{
                      background: colors.gradientGreen,
                      color: colors.white,
                      fontWeight: 800,
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.6, md: 1.8 },
                      borderRadius: 2,
                      fontSize: { xs: '0.9rem', md: '0.95rem' },
                      minWidth: { sm: 220 },
                      boxShadow: `0 5px 15px ${alpha(colors.green, 0.3)}`,
                      zIndex: 2,
                      position: 'relative',
                    }}
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Collection (€129)
                  </Button>

                  <Button
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: alpha(colors.green, 0.12)
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    variant="outlined"
                    startIcon={<WorkspacePremium />}
                    sx={{
                      borderColor: colors.green,
                      color: colors.green,
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.6, md: 1.8 },
                      borderRadius: 2,
                      fontSize: { xs: '0.9rem', md: '0.95rem' },
                      fontWeight: 600,
                      minWidth: { sm: 180 },
                      '&:hover': {
                        borderColor: colors.lightGreen,
                        background: alpha(colors.green, 0.08),
                      },
                      zIndex: 2,
                      position: 'relative',
                    }}
                  >
                    Customize Your Set
                  </Button>
                </Stack>

                {/* Enhanced Stats */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 3, sm: 4 }}
                  flexWrap="wrap"
                  sx={{ position: 'relative', zIndex: 2 }}
                >
                  {premiumStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <Card
                        sx={{
                          background: alpha(colors.dark, 0.6),
                          border: `1px solid ${alpha(colors.green, 0.1)}`,
                          borderRadius: 2,
                          p: 2,
                          minWidth: 150
                        }}
                      >
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" spacing={1.5}>
                            <Box
                              sx={{
                                background: alpha(colors.green, 0.1),
                                borderRadius: 2,
                                p: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <stat.icon sx={{ color: colors.green, fontSize: '1.5rem' }} />
                            </Box>
                            <Box>
                              <Typography fontWeight={900} color={colors.green} sx={{ fontSize: '1.5rem' }}>
                                {stat.value}
                              </Typography>
                              <Typography fontSize="0.85rem" color={colors.cream} fontWeight={600}>
                                {stat.label}
                              </Typography>
                              <Typography fontSize="0.7rem" opacity={0.7} color={alpha(colors.green, 0.8)}>
                                {stat.sub}
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      </Card>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Empty column for spacing - Image is in background */}
          <Grid item xs={12} md={4} />
        </Grid>

        {/* =======================
           INTERACTIVE TECHNOLOGY SECTION
        ======================= */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Stack spacing={3}>
                  <Typography variant="h3" sx={{ color: colors.green, fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                    Experience Islamic Craftsmanship
                  </Typography>
                  <ProductShowcase3D product={selectedProduct} />
                  
                  {/* Fabric Specs */}
                  <Card sx={{ background: alpha(colors.dark, 0.6), p: 2.5 }}>
                    <Typography variant="h6" color={colors.cream} mb={1.5} fontSize="1.1rem">
                      📜 Premium Fabric Details
                    </Typography>
                    <Grid container spacing={1.5}>
                      {[
                        { key: 'Material', value: 'Egyptian Cotton' },
                        { key: 'Weave', value: 'Traditional' },
                        { key: 'Breathability', value: 'Excellent' },
                        { key: 'Durability', value: '200+ washes' },
                        { key: 'Comfort', value: 'Prayer-friendly' },
                        { key: 'Design', value: 'Authentic' }
                      ].map((spec, idx) => (
                        <Grid item xs={6} key={idx}>
                          <Stack>
                            <Typography variant="caption" color={alpha(colors.cream, 0.6)} fontSize="0.75rem">
                              {spec.key.toUpperCase()}
                            </Typography>
                            <Typography color={colors.green} fontWeight={600} fontSize="0.9rem">
                              {spec.value}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Card>
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {/* Performance Comparison */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h4" sx={{ color: colors.cream, fontWeight: 900, mb: 2, fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
                    Premium vs Standard
                  </Typography>
                  <PerformanceComparisonTable />
                </motion.div>

                {/* Limited Edition Alert */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, ${colors.dark}, #1E293B)`,
                      border: `2px solid ${colors.green}`,
                      borderRadius: 2,
                      p: 2.5,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Stack spacing={1.5}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LocalFireDepartment sx={{ color: colors.green }} />
                        <Typography variant="h6" color={colors.cream} fontWeight={700} fontSize="1rem">
                          Limited Islamic Editions
                        </Typography>
                      </Stack>
                      <Typography color={alpha(colors.cream, 0.8)} fontSize="0.9rem">
                        These exclusive collections sell out quickly. Don't miss your chance.
                      </Typography>
                      {liveInventory.map((item) => (
                        <Stack key={item.id} direction="row" justifyContent="space-between" alignItems="center">
                          <Typography color={colors.cream} fontSize="0.9rem">{item.name}</Typography>
                          <Stack alignItems="flex-end" spacing={0.5}>
                            <Chip
                              label={item.tag}
                              size="small"
                              sx={{
                                background: alpha(colors.green, 0.2),
                                color: colors.green,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }}
                            />
                            <Typography variant="caption" color={alpha(colors.cream, 0.7)} fontSize="0.75rem">
                              {item.remaining} remaining
                            </Typography>
                          </Stack>
                        </Stack>
                      ))}
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          background: alpha(colors.cream, 0.1),
                          '& .MuiLinearProgress-bar': {
                            background: colors.gradientGreen
                          }
                        }}
                      />
                    </Stack>
                  </Card>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* =======================
           CENTERED TITLE SECTION
        ======================= */}
        <Box
          ref={titleRef}
          sx={{
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            my: { xs: 6, md: 10 }
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
              background: `radial-gradient(circle, ${alpha(colors.green, 0.05)} 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              background: `linear-gradient(90deg, ${colors.cream} 30%, ${colors.green} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Islamic Collections
          </Typography>
          <Typography
            sx={{
              color: alpha(colors.cream, 0.7),
              fontSize: '1.1rem',
              mt: 2,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Premium modest wear for every occasion
          </Typography>
        </Box>

        {/* =======================
           IMAGE GRID SECTION
        ======================= */}
        <Box
          ref={gridRef}
          sx={{
            width: '100%',
            mt: { xs: 2, md: 1 }
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gridTemplateRows: {
                xs: 'repeat(4, minmax(200px, 1fr))',
                md: 'repeat(2, minmax(300px, 1fr))',
              },
              gridTemplateAreas: {
                xs: `
                  "a"
                  "b"
                  "c"
                  "d"
                `,
                md: `
                  "a b"
                  "c d"
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
                  height: '100%'
                }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 30px 80px ${alpha(colors.green, 0.3)}`
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
                      0 20px 60px ${alpha(colors.dark, 0.8)},
                      0 5px 15px ${alpha(colors.dark, 0.4)},
                      inset 0 0 0 1px ${alpha(colors.green, 0.1)}
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
                      background: colors.gradientGreen,
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
                        background: alpha(colors.green, 0.9),
                        color: colors.white,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </Box>

                  {/* Arabic Title */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.cream,
                        fontSize: '1.2rem',
                        fontStyle: 'italic',
                        fontWeight: 600,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {item.arabic}
                    </Typography>
                  </Box>

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: `linear-gradient(180deg, transparent 0%, ${alpha(colors.dark, 0.9)} 100%)`,
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
                        color: colors.cream,
                        mb: 3,
                        letterSpacing: 2,
                        textShadow: `0 2px 10px ${alpha(colors.dark, 0.8)}`,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: alpha(colors.cream, 0.9),
                        fontSize: '0.9rem',
                        mb: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {item.material}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.gold,
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        mb: 3,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                      }}
                    >
                      {item.price}
                    </Typography>

                    <Button
                      component={motion.button}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 15px 40px ${alpha(colors.green, 0.5)}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        background: colors.gradientGreen,
                        color: colors.white,
                        fontWeight: 800,
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        fontSize: '0.8rem',
                        minWidth: '120px',
                        boxShadow: `0 10px 30px ${alpha(colors.green, 0.4)}`,
                        '&:hover': {
                          background: colors.gradientGreen,
                        },
                      }}
                      onClick={() => window.location.href = item.link}
                    >
                      Buy Now
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
              mt: 3,
              mb: 3,
            }}
          >
            <Button
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 20px 50px ${alpha(colors.green, 0.4)}`
              }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: colors.green,
                color: colors.white,
                px: 5,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 600,
                background: colors.gradientGreen,
                borderWidth: 2,
                '&:hover': {
                  borderColor: colors.green,
                  background: colors.gradientGreen,
                  borderWidth: 2,
                },
              }}
            >
              View All Collections
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Size Guide Modal */}
      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </Box>
  );
}