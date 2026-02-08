import React, { useState, useEffect } from 'react';
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
  TextField,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Slider,
  RadioGroup,
  Radio,
  FormControlLabel,
  Badge,
  Tabs,
  Tab,
  CardMedia,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Fab,
  Zoom
} from '@mui/material';
import {
  ShoppingBag,
  ArrowBack,
  Favorite,
  Compare,
  Share,
  LocalShipping,
  Shield,
  Timer,
  Verified,
  Diamond,
  WorkspacePremium,
  Loyalty,
  LocalFireDepartment,
  Close,
  Search,
  FilterList,
  Sort,
  ExpandMore,
  ExpandLess,
  CheckCircle,
  Star,
  RemoveRedEye,
  AddShoppingCart,
  ShoppingCart,
  Person,
  Groups,
  Thermostat,
  WaterDrop,
  Air,
  Scale,
  ZoomIn,
  Fullscreen,
  ArrowForwardIos,
  ArrowBackIos,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Inventory,
  Discount,
  FlashOn,
  Facebook,
  Twitter,
  Pinterest,
  WhatsApp,
  Email,
  Print
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

/* =======================
   DESIGN TOKENS
======================= */
const colors = {
  black: '#0b0b0b',
  dark: '#121212',
  gold: '#d4af37',
  goldSoft: '#f4e4a6',
  platinum: '#e5e4e2',
  carbon: '#333333',
  white: '#ffffff',
  gradientGold: 'linear-gradient(135deg, #d4af37 0%, #f9d423 50%, #d4af37 100%)',
  gradientPlatinum: 'linear-gradient(135deg, #e5e4e2 0%, #ffffff 50%, #e5e4e2 100%)',
  gradientDark: 'linear-gradient(180deg, #121212 0%, #0b0b0b 100%)',
  gradientCarbon: 'linear-gradient(135deg, #333333 0%, #1a1a1a 50%, #333333 100%)',
};

/* =======================
   EXTENSIVE PRODUCT DATA
======================= */
const allProducts = [
  {
    id: 'tshirt-001',
    title: 'Performance Elite T-Shirt',
    category: 'T-SHIRTS',
    subcategory: 'Performance',
    image: 'jerseyImage',
    price: 89,
    originalPrice: 119,
    discount: 25,
    tag: 'Bestseller',
    material: 'Dri-FIT Elite Pro',
    weight: '145g',
    description: 'Professional-grade performance shirt with NASA-developed technology for optimal temperature regulation.',
    features: [
      'Moisture-wicking technology',
      'SPF 50+ protection',
      'Antimicrobial treatment',
      '4-way stretch fabric',
      'Seamless construction'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#1a1a1a', '#333333', '#d4af37'],
    stock: 42,
    rating: 4.8,
    reviews: 128,
    brand: 'Nike',
    collection: 'Elite Performance',
    tags: ['performance', 'premium', 'athletic', 'training', 'gym'],
    specs: {
      material: 'Dri-FIT Elite Pro',
      weight: '145g',
      breathability: '98%',
      moisture: '0.3s absorption',
      spf: '50+',
      durability: '200+ washes',
      warranty: '2 years'
    }
  },
  {
    id: 'short-001',
    title: 'Ultra-Light Running Shorts',
    category: 'SHORTS',
    subcategory: 'Running',
    image: 'shortImage',
    price: 79,
    originalPrice: 99,
    discount: 20,
    tag: 'New',
    material: 'Flexweave 4D',
    weight: '89g',
    description: 'The lightest shorts in our collection with advanced ventilation and flexibility.',
    features: [
      'Ultra-lightweight (89g)',
      '360° ventilation',
      'Built-in liner',
      'Reflective details',
      'Phone pocket'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000000', '#1a1a1a', '#003366'],
    stock: 28,
    rating: 4.9,
    reviews: 92,
    brand: 'Adidas',
    collection: 'Speed Collection',
    tags: ['running', 'lightweight', 'ventilation', 'summer'],
    specs: {
      material: 'Flexweave 4D',
      weight: '89g',
      breathability: '99%',
      stretch: '360°',
      pockets: 3,
      reflective: 'Yes'
    }
  },
  {
    id: 'hoodie-001',
    title: 'Premium Thermo Hoodie',
    category: 'HOODIES',
    subcategory: 'Training',
    image: 'hoodieImage',
    price: 119,
    originalPrice: 149,
    discount: 20,
    tag: 'Limited',
    material: 'ThermoTech Pro',
    weight: '320g',
    description: 'Intelligent temperature-regulating hoodie for all-season training.',
    features: [
      'Smart temperature control',
      'Moisture-wicking interior',
      'Kangaroo pocket',
      'Adjustable hood',
      'Thumb holes'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#333333', '#1a1a1a'],
    stock: 15,
    rating: 4.7,
    reviews: 64,
    brand: 'Under Armour',
    collection: 'Winter Elite',
    tags: ['hoodie', 'winter', 'training', 'warm'],
    specs: {
      material: 'ThermoTech Pro',
      weight: '320g',
      insulation: 'Medium',
      temperature: '0-15°C',
      pockets: 2,
      hood: 'Adjustable'
    }
  },
  {
    id: 'sleeveless-001',
    title: 'Compression Sleeveless Jersey',
    category: 'SLEEVELESS',
    subcategory: 'Compression',
    image: 'sleevelessImage',
    price: 69,
    originalPrice: 89,
    discount: 22,
    tag: 'Sale',
    material: 'AirFlow Mesh',
    weight: '110g',
    description: 'Advanced compression jersey for maximum muscle support and ventilation.',
    features: [
      'Graduated compression',
      'Mesh ventilation zones',
      'UPF 50+ protection',
      'Seamless construction',
      'Quick-dry fabric'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000', '#d4af37', '#1a1a1a'],
    stock: 56,
    rating: 4.6,
    reviews: 87,
    brand: 'CompressionZ',
    collection: 'Performance Pro',
    tags: ['compression', 'sleeveless', 'gym', 'training'],
    specs: {
      material: 'AirFlow Mesh',
      weight: '110g',
      compression: 'Level 2',
      ventilation: 'Zoned',
      spf: '50+',
      drying: '30 minutes'
    }
  },
  {
    id: 'pants-001',
    title: 'Elite Training Pants',
    category: 'PANTS',
    subcategory: 'Training',
    image: 'pantsImage',
    price: 99,
    originalPrice: 129,
    discount: 23,
    tag: 'Popular',
    material: 'Compression Elite',
    weight: '210g',
    description: 'Professional training pants with enhanced flexibility and durability.',
    features: [
      '4-way stretch fabric',
      'Reinforced knees',
      'Moisture-wicking',
      'Phone pocket',
      'Adjustable waist'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#000000', '#1a1a1a', '#333333'],
    stock: 37,
    rating: 4.8,
    reviews: 103,
    brand: 'Gymshark',
    collection: 'Athlete Series',
    tags: ['pants', 'training', 'gym', 'flexible'],
    specs: {
      material: 'Compression Elite',
      weight: '210g',
      stretch: '4-way',
      reinforcement: 'Knees',
      pockets: 3,
      waist: 'Adjustable'
    }
  },
  // Add more products...
  {
    id: 'tshirt-002',
    title: 'Breathable Training Tee',
    category: 'T-SHIRTS',
    subcategory: 'Training',
    image: 'jerseyImage',
    price: 75,
    originalPrice: 95,
    discount: 21,
    tag: 'Featured',
    material: 'CoolMax Pro',
    weight: '130g',
    description: 'Enhanced breathability for intense training sessions.',
    features: [
      'Advanced cooling technology',
      'Odor resistance',
      'Flatlock seams',
      'Tagless design',
      'Quick-dry fabric'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000000', '#003366', '#1a1a1a'],
    stock: 51,
    rating: 4.5,
    reviews: 76,
    brand: 'Puma',
    collection: 'Cool Training',
    tags: ['training', 'breathable', 'tee', 'gym'],
    specs: {
      material: 'CoolMax Pro',
      weight: '130g',
      breathability: '95%',
      cooling: 'Yes',
      seams: 'Flatlock'
    }
  }
];

const categories = [
  { name: 'T-SHIRTS', count: 24, icon: '👕' },
  { name: 'SHORTS', count: 18, icon: '🩳' },
  { name: 'HOODIES', count: 12, icon: '🧥' },
  { name: 'SLEEVELESS', count: 15, icon: '🎽' },
  { name: 'PANTS', count: 21, icon: '👖' },
  { name: 'JACKETS', count: 8, icon: '🧥' },
  { name: 'ACCESSORIES', count: 32, icon: '🎒' }
];

const brands = [
  'Nike', 'Adidas', 'Under Armour', 'Puma', 'Gymshark', 'Lululemon', 'Reebok', 'New Balance'
];

const priceRanges = [
  { label: 'Under €50', min: 0, max: 50 },
  { label: '€50 - €100', min: 50, max: 100 },
  { label: '€100 - €150', min: 100, max: 150 },
  { label: 'Over €150', min: 150, max: 1000 }
];

/* =======================
   SUB-COMPONENTS
======================= */
const ProductDetailModal = ({ product, open, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const images = [product.image, product.image, product.image]; // In real app, use actual images

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          background: colors.gradientDark,
          border: `2px solid ${colors.gold}`,
          borderRadius: 3,
          maxHeight: '90vh',
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle sx={{ p: 0 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 3, borderBottom: `1px solid ${alpha(colors.gold, 0.2)}` }}>
          <Typography variant="h5" fontWeight={900} color={colors.white}>
            {product.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: colors.gold }}>
              <Share />
            </IconButton>
            <IconButton size="small" sx={{ color: colors.gold }}>
              <Favorite />
            </IconButton>
            <IconButton onClick={onClose} size="small" sx={{ color: colors.gold }}>
              <Close />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>
      
      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          {/* Left Column - Images */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ p: 3 }}>
              {/* Main Image */}
              <Box sx={{ position: 'relative', height: 400, borderRadius: 2, overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={images[selectedImage]}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
                <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                  {product.discount && (
                    <Chip
                      label={`-${product.discount}%`}
                      sx={{
                        background: colors.gradientGold,
                        color: colors.black,
                        fontWeight: 800,
                        fontSize: '0.8rem'
                      }}
                    />
                  )}
                </Box>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    background: alpha(colors.black, 0.8),
                    color: colors.gold,
                    '&:hover': { background: colors.gold, color: colors.black }
                  }}
                >
                  <ZoomIn />
                </IconButton>
              </Box>

              {/* Thumbnail Images */}
              <Stack direction="row" spacing={1} justifyContent="center">
                {images.map((img, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `2px solid ${selectedImage === idx ? colors.gold : 'transparent'}`,
                      opacity: selectedImage === idx ? 1 : 0.7,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right Column - Details */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3} sx={{ p: 3, height: '100%' }}>
              {/* Header */}
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Chip
                      label={product.tag}
                      size="small"
                      sx={{
                        background: alpha(colors.gold, 0.2),
                        color: colors.gold,
                        fontWeight: 600,
                        mb: 1
                      }}
                    />
                    <Typography variant="h4" color={colors.white} fontWeight={900}>
                      {product.title}
                    </Typography>
                    <Typography color={colors.goldSoft} fontSize="0.9rem">
                      {product.brand} • {product.collection}
                    </Typography>
                  </Box>
                  
                  {/* Price */}
                  <Box sx={{ textAlign: 'right' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {product.originalPrice && (
                        <Typography
                          sx={{
                            color: alpha(colors.white, 0.5),
                            textDecoration: 'line-through',
                            fontSize: '0.9rem'
                          }}
                        >
                          €{product.originalPrice}
                        </Typography>
                      )}
                      <Typography variant="h3" color={colors.gold} fontWeight={900}>
                        €{product.price}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                      <Rating value={product.rating} precision={0.1} readOnly size="small" />
                      <Typography color={alpha(colors.white, 0.7)} fontSize="0.85rem">
                        ({product.reviews} reviews)
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>

              {/* Description */}
              <Typography color={colors.goldSoft} lineHeight={1.7}>
                {product.description}
              </Typography>

              {/* Color Selection */}
              <Box>
                <Typography color={colors.white} fontWeight={600} mb={1}>
                  Color: <Typography component="span" color={colors.gold}>{selectedColor || 'Select'}</Typography>
                </Typography>
                <Stack direction="row" spacing={1}>
                  {product.colors.map((color, idx) => (
                    <Box
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: color,
                        cursor: 'pointer',
                        border: `3px solid ${selectedColor === color ? colors.gold : 'transparent'}`,
                        boxShadow: selectedColor === color ? `0 0 0 2px ${alpha(colors.gold, 0.3)}` : 'none',
                        '&:hover': { transform: 'scale(1.1)' }
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Size Selection */}
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography color={colors.white} fontWeight={600}>
                    Size: <Typography component="span" color={colors.gold}>{selectedSize || 'Select'}</Typography>
                  </Typography>
                  <Button size="small" sx={{ color: colors.gold, fontSize: '0.8rem' }}>
                    Size Guide
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'contained' : 'outlined'}
                      onClick={() => setSelectedSize(size)}
                      sx={{
                        minWidth: 50,
                        borderColor: colors.gold,
                        color: selectedSize === size ? colors.black : colors.gold,
                        background: selectedSize === size ? colors.gradientGold : 'transparent',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: colors.goldSoft,
                          background: selectedSize === size ? colors.gradientGold : alpha(colors.gold, 0.1)
                        }
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </Stack>
              </Box>

              {/* Quantity & Add to Cart */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography color={colors.white} fontWeight={600}>Quantity:</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                      size="small"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      sx={{ color: colors.gold, border: `1px solid ${colors.gold}` }}
                    >
                      -
                    </IconButton>
                    <Typography color={colors.white} fontWeight={600} minWidth={30} textAlign="center">
                      {quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => setQuantity(quantity + 1)}
                      sx={{ color: colors.gold, border: `1px solid ${colors.gold}` }}
                    >
                      +
                    </IconButton>
                  </Stack>
                </Box>
                
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ShoppingCart />}
                  disabled={!selectedSize || !selectedColor}
                  sx={{
                    background: colors.gradientGold,
                    color: colors.black,
                    fontWeight: 800,
                    py: 1.5,
                    '&:hover': { background: colors.gradientGold }
                  }}
                >
                  Add to Cart - €{product.price * quantity}
                </Button>
              </Stack>

              {/* Stock & Delivery */}
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocalShipping sx={{ color: colors.gold, fontSize: 20 }} />
                    <Typography color={colors.goldSoft} fontSize="0.9rem">
                      Free delivery in 24h
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Shield sx={{ color: colors.gold, fontSize: 20 }} />
                    <Typography color={colors.goldSoft} fontSize="0.9rem">
                      60-day return policy
                    </Typography>
                  </Stack>
                </Stack>
                
                <Box>
                  <Typography color={product.stock > 10 ? colors.gold : '#ff6b6b'} fontWeight={600}>
                    {product.stock} items in stock
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min((product.stock / 100) * 100, 100)}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      mt: 0.5,
                      background: alpha(colors.white, 0.1),
                      '& .MuiLinearProgress-bar': {
                        background: product.stock > 10 ? colors.gradientGold : '#ff6b6b'
                      }
                    }}
                  />
                </Box>
              </Stack>

              {/* Tabs for Details */}
              <Box>
                <Tabs
                  value={activeTab}
                  onChange={(e, newValue) => setActiveTab(newValue)}
                  sx={{
                    borderBottom: `1px solid ${alpha(colors.gold, 0.2)}`,
                    '& .MuiTab-root': {
                      color: alpha(colors.white, 0.7),
                      fontWeight: 600,
                      '&.Mui-selected': { color: colors.gold }
                    },
                    '& .MuiTabs-indicator': { background: colors.gold }
                  }}
                >
                  <Tab label="Features" />
                  <Tab label="Specifications" />
                  <Tab label="Reviews" />
                  <Tab label="Shipping" />
                </Tabs>
                
                <Box sx={{ pt: 2 }}>
                  {activeTab === 0 && (
                    <Stack spacing={1}>
                      {product.features.map((feature, idx) => (
                        <Stack key={idx} direction="row" spacing={1} alignItems="center">
                          <CheckCircle sx={{ color: colors.gold, fontSize: 16 }} />
                          <Typography color={colors.goldSoft}>{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                  
                  {activeTab === 1 && (
                    <Grid container spacing={2}>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <Grid item xs={6} key={key}>
                          <Stack>
                            <Typography variant="caption" color={alpha(colors.white, 0.6)}>
                              {key.toUpperCase()}
                            </Typography>
                            <Typography color={colors.gold} fontWeight={600}>
                              {value}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Box>
              </Box>

              {/* Social Share */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography color={colors.white} fontWeight={600}>Share:</Typography>
                {[Facebook, Twitter, Pinterest, WhatsApp, Email].map((Icon, idx) => (
                  <IconButton key={idx} size="small" sx={{ color: colors.gold }}>
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const FilterSidebar = ({ filters, onFilterChange, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  return (
    <Drawer
      anchor="left"
      open={filters.open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          background: colors.gradientDark,
          borderRight: `1px solid ${alpha(colors.gold, 0.2)}`,
          color: colors.white,
          p: 2
        }
      }}
    >
      <Stack spacing={3}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700} color={colors.gold}>
            Filters
          </Typography>
          <IconButton onClick={onClose} size="small" sx={{ color: colors.gold }}>
            <Close />
          </IconButton>
        </Stack>

        {/* Search */}
        <TextField
          placeholder="Search products..."
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: colors.gold }} />
              </InputAdornment>
            ),
            sx: {
              background: alpha(colors.black, 0.6),
              borderColor: alpha(colors.gold, 0.3),
              color: colors.white,
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.gold
              }
            }
          }}
        />

        {/* Categories */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} color={colors.white} mb={1}>
            Categories
          </Typography>
          <List dense>
            {categories.map((category) => (
              <ListItem
                key={category.name}
                button
                onClick={() => {
                  const newSelected = selectedCategories.includes(category.name)
                    ? selectedCategories.filter(c => c !== category.name)
                    : [...selectedCategories, category.name];
                  setSelectedCategories(newSelected);
                  onFilterChange('categories', newSelected);
                }}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  background: selectedCategories.includes(category.name) ? alpha(colors.gold, 0.1) : 'transparent'
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {selectedCategories.includes(category.name) ? <CheckCircle sx={{ color: colors.gold }} /> : null}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color={colors.white}>
                        {category.icon} {category.name}
                      </Typography>
                      <Typography color={colors.goldSoft} fontSize="0.8rem">
                        {category.count}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Price Range */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} color={colors.white} mb={2}>
            Price Range: €{priceRange[0]} - €{priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            onChangeCommitted={(e, newValue) => onFilterChange('priceRange', newValue)}
            min={0}
            max={500}
            valueLabelDisplay="auto"
            sx={{
              color: colors.gold,
              '& .MuiSlider-thumb': {
                background: colors.gold,
                '&:hover': { boxShadow: `0 0 0 8px ${alpha(colors.gold, 0.16)}` }
              }
            }}
          />
          <Stack direction="row" spacing={1} mt={1}>
            {priceRanges.map((range) => (
              <Chip
                key={range.label}
                label={range.label}
                size="small"
                onClick={() => {
                  setPriceRange([range.min, range.max]);
                  onFilterChange('priceRange', [range.min, range.max]);
                }}
                sx={{
                  background: priceRange[0] === range.min ? alpha(colors.gold, 0.2) : alpha(colors.white, 0.1),
                  color: priceRange[0] === range.min ? colors.gold : colors.white,
                  fontWeight: 500
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Brands */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} color={colors.white} mb={1}>
            Brands
          </Typography>
          <Stack spacing={0.5}>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => {
                      const newSelected = e.target.checked
                        ? [...selectedBrands, brand]
                        : selectedBrands.filter(b => b !== brand);
                      setSelectedBrands(newSelected);
                      onFilterChange('brands', newSelected);
                    }}
                    sx={{
                      color: colors.gold,
                      '&.Mui-checked': { color: colors.gold }
                    }}
                  />
                }
                label={
                  <Typography color={colors.white} fontSize="0.9rem">
                    {brand}
                  </Typography>
                }
              />
            ))}
          </Stack>
        </Box>

        {/* Clear Filters */}
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            setSelectedCategories([]);
            setSelectedBrands([]);
            setPriceRange([0, 500]);
            onFilterChange('clear', null);
          }}
          sx={{
            borderColor: colors.gold,
            color: colors.gold,
            fontWeight: 600,
            '&:hover': {
              borderColor: colors.goldSoft,
              background: alpha(colors.gold, 0.1)
            }
          }}
        >
          Clear All Filters
        </Button>
      </Stack>
    </Drawer>
  );
};

/* =======================
   MAIN PRODUCTS CATALOG COMPONENT
======================= */
export default function ProductsCatalog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { category } = useParams();

  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    open: false,
    categories: [],
    brands: [],
    priceRange: [0, 500],
    sortBy: 'featured',
    searchQuery: ''
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [cart, setCart] = useState([]);

  // Filter products
  useEffect(() => {
    let filtered = [...allProducts];

    // Filter by category if in URL
    if (category) {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === category.toLowerCase() || 
        p.subcategory.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query)) ||
        p.brand.toLowerCase().includes(query)
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    // Filter by price range
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // Featured - keep original order or sort by tag
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, category]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({
        ...filters,
        categories: [],
        brands: [],
        priceRange: [0, 500],
        searchQuery: ''
      });
    } else {
      setFilters({ ...filters, [filterType]: value });
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: colors.gradientDark,
        color: colors.white,
        overflowX: 'hidden'
      }}
    >
      {/* Back to Home Button */}
      <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 100 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{
            background: alpha(colors.black, 0.8),
            backdropFilter: 'blur(10px)',
            color: colors.gold,
            borderRadius: 2,
            px: 2,
            '&:hover': {
              background: colors.gold,
              color: colors.black
            }
          }}
        >
          Back to Home
        </Button>
      </Box>

      {/* Cart Indicator */}
      {cart.length > 0 && (
        <Fab
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: colors.gradientGold,
            color: colors.black,
            zIndex: 100,
            '&:hover': { background: colors.gradientGold }
          }}
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </Fab>
      )}

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '3rem' },
              background: `linear-gradient(90deg, ${colors.white}, ${colors.gold})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textAlign: 'center',
              mb: 2
            }}
          >
            Premium Sportswear Collection
          </Typography>
          <Typography
            color={colors.goldSoft}
            sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto', mb: 4 }}
          >
            Discover our exclusive collection of high-performance sportswear designed for athletes
          </Typography>
        </Box>

        {/* Controls Bar */}
        <Card
          sx={{
            background: alpha(colors.black, 0.6),
            border: `1px solid ${alpha(colors.gold, 0.2)}`,
            borderRadius: 2,
            p: 2,
            mb: 4
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                placeholder="Search products, brands, features..."
                variant="outlined"
                size="small"
                fullWidth
                value={filters.searchQuery}
                onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: colors.gold }} />
                    </InputAdornment>
                  ),
                  sx: {
                    background: alpha(colors.black, 0.8),
                    borderColor: alpha(colors.gold, 0.3),
                    color: colors.white,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: colors.gold
                    }
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                <Button
                  startIcon={<FilterList />}
                  onClick={() => setFilters({ ...filters, open: true })}
                  sx={{
                    color: colors.gold,
                    borderColor: colors.gold,
                    '&:hover': {
                      borderColor: colors.goldSoft,
                      background: alpha(colors.gold, 0.1)
                    }
                  }}
                  variant="outlined"
                >
                  Filters
                </Button>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <Select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    sx={{
                      background: alpha(colors.black, 0.8),
                      color: colors.white,
                      borderColor: alpha(colors.gold, 0.3),
                      '& .MuiSelect-icon': { color: colors.gold }
                    }}
                  >
                    <MenuItem value="featured">Featured</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="rating">Highest Rated</MenuItem>
                    <MenuItem value="newest">Newest</MenuItem>
                  </Select>
                </FormControl>

                <Stack direction="row" spacing={0.5}>
                  <IconButton
                    onClick={() => setViewMode('grid')}
                    sx={{
                      color: viewMode === 'grid' ? colors.gold : alpha(colors.white, 0.5),
                      background: viewMode === 'grid' ? alpha(colors.gold, 0.1) : 'transparent'
                    }}
                  >
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0.5 }}>
                      {[...Array(4)].map((_, i) => (
                        <Box key={i} sx={{ width: 4, height: 4, background: 'currentColor' }} />
                      ))}
                    </Box>
                  </IconButton>
                  <IconButton
                    onClick={() => setViewMode('list')}
                    sx={{
                      color: viewMode === 'list' ? colors.gold : alpha(colors.white, 0.5),
                      background: viewMode === 'list' ? alpha(colors.gold, 0.1) : 'transparent'
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {[...Array(3)].map((_, i) => (
                        <Box key={i} sx={{ width: 16, height: 2, background: 'currentColor' }} />
                      ))}
                    </Box>
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Card>

        {/* Categories Navigation */}
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            {categories.map((cat) => (
              <Chip
                key={cat.name}
                label={`${cat.icon} ${cat.name} (${cat.count})`}
                onClick={() => handleFilterChange('categories', [cat.name])}
                sx={{
                  background: filters.categories.includes(cat.name) 
                    ? alpha(colors.gold, 0.2) 
                    : alpha(colors.white, 0.1),
                  color: filters.categories.includes(cat.name) ? colors.gold : colors.white,
                  fontWeight: 600,
                  mb: 1,
                  '&:hover': {
                    background: alpha(colors.gold, 0.3)
                  }
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Results Info */}
        <Box sx={{ mb: 3 }}>
          <Typography color={colors.goldSoft}>
            Showing {filteredProducts.length} of {allProducts.length} products
          </Typography>
        </Box>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background: alpha(colors.black, 0.8),
                      border: `1px solid ${alpha(colors.gold, 0.2)}`,
                      borderRadius: 3,
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: colors.gold,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 20px 40px ${alpha(colors.gold, 0.2)}`
                      }
                    }}
                  >
                    {/* Product Image */}
                    <Box sx={{ position: 'relative', height: 200 }}>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      
                      {/* Badges */}
                      <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
                        {product.discount && (
                          <Chip
                            label={`-${product.discount}%`}
                            size="small"
                            sx={{
                              background: colors.gradientGold,
                              color: colors.black,
                              fontWeight: 800,
                              fontSize: '0.7rem'
                            }}
                          />
                        )}
                      </Box>
                      
                      <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                        <Chip
                          label={product.tag}
                          size="small"
                          sx={{
                            background: alpha(colors.black, 0.8),
                            color: colors.gold,
                            fontWeight: 600,
                            fontSize: '0.7rem'
                          }}
                        />
                      </Box>

                      {/* Quick Actions */}
                      <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{
                          position: 'absolute',
                          bottom: 12,
                          right: 12,
                          opacity: 0,
                          transition: 'opacity 0.3s',
                          '&:hover, .product-card:hover &': {
                            opacity: 1
                          }
                        }}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            background: alpha(colors.black, 0.8),
                            color: colors.gold,
                            '&:hover': { background: colors.gold, color: colors.black }
                          }}
                        >
                          <Favorite fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{
                            background: alpha(colors.black, 0.8),
                            color: colors.gold,
                            '&:hover': { background: colors.gold, color: colors.black }
                          }}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <RemoveRedEye fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{
                            background: alpha(colors.black, 0.8),
                            color: colors.gold,
                            '&:hover': { background: colors.gold, color: colors.black }
                          }}
                        >
                          <Compare fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>

                    {/* Product Details */}
                    <CardContent>
                      <Stack spacing={1.5}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            color={colors.white}
                            fontWeight={700}
                            sx={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              height: '2.8em'
                            }}
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color={colors.goldSoft}
                            sx={{ fontSize: '0.8rem', mt: 0.5 }}
                          >
                            {product.brand} • {product.material}
                          </Typography>
                        </Box>

                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Rating
                            value={product.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                            icon={<Star sx={{ color: colors.gold, fontSize: 16 }} />}
                            emptyIcon={<Star sx={{ color: alpha(colors.white, 0.3), fontSize: 16 }} />}
                          />
                          <Typography color={alpha(colors.white, 0.7)} fontSize="0.8rem">
                            ({product.reviews})
                          </Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Box>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              {product.originalPrice && (
                                <Typography
                                  sx={{
                                    color: alpha(colors.white, 0.5),
                                    textDecoration: 'line-through',
                                    fontSize: '0.85rem'
                                  }}
                                >
                                  €{product.originalPrice}
                                </Typography>
                              )}
                              <Typography variant="h6" color={colors.gold} fontWeight={800}>
                                €{product.price}
                              </Typography>
                            </Stack>
                            <Typography
                              color={product.stock > 10 ? colors.gold : '#ff6b6b'}
                              fontSize="0.75rem"
                              fontWeight={600}
                            >
                              {product.stock} in stock
                            </Typography>
                          </Box>
                          
                          <Button
                            size="small"
                            startIcon={<AddShoppingCart />}
                            onClick={() => {
                              addToCart(product);
                              setSelectedProduct(product);
                            }}
                            sx={{
                              background: colors.gradientGold,
                              color: colors.black,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              px: 1.5,
                              '&:hover': { background: colors.gradientGold }
                            }}
                          >
                            Add
                          </Button>
                        </Stack>

                        {/* Quick Specs */}
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                            <Chip
                              key={key}
                              label={`${key}: ${value}`}
                              size="small"
                              sx={{
                                background: alpha(colors.gold, 0.1),
                                color: colors.goldSoft,
                                fontSize: '0.65rem',
                                height: 20
                              }}
                            />
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          // List View
          <Stack spacing={2}>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    background: alpha(colors.black, 0.8),
                    border: `1px solid ${alpha(colors.gold, 0.2)}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: colors.gold,
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} md={3}>
                      <Box sx={{ position: 'relative', height: 200 }}>
                        <Box
                          component="img"
                          src={product.image}
                          alt={product.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {product.discount && (
                          <Chip
                            label={`-${product.discount}%`}
                            sx={{
                              position: 'absolute',
                              top: 12,
                              left: 12,
                              background: colors.gradientGold,
                              color: colors.black,
                              fontWeight: 800,
                              fontSize: '0.8rem'
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                      <CardContent>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Stack spacing={1}>
                              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                                <Box>
                                  <Chip
                                    label={product.tag}
                                    size="small"
                                    sx={{
                                      background: alpha(colors.gold, 0.2),
                                      color: colors.gold,
                                      fontWeight: 600,
                                      mb: 1
                                    }}
                                  />
                                  <Typography variant="h6" color={colors.white} fontWeight={700}>
                                    {product.title}
                                  </Typography>
                                  <Typography color={colors.goldSoft} fontSize="0.9rem">
                                    {product.brand} • {product.collection}
                                  </Typography>
                                </Box>
                              </Stack>
                              
                              <Typography color={colors.goldSoft} fontSize="0.9rem" sx={{ mb: 1 }}>
                                {product.description}
                              </Typography>
                              
                              <Stack direction="row" spacing={2} flexWrap="wrap">
                                {product.features.slice(0, 3).map((feature, idx) => (
                                  <Chip
                                    key={idx}
                                    label={feature}
                                    size="small"
                                    sx={{
                                      background: alpha(colors.gold, 0.1),
                                      color: colors.goldSoft,
                                      fontSize: '0.75rem'
                                    }}
                                  />
                                ))}
                              </Stack>
                            </Stack>
                          </Grid>
                          
                          <Grid item xs={12} md={4}>
                            <Stack spacing={2} alignItems="flex-end">
                              <Box sx={{ textAlign: 'right' }}>
                                <Stack direction="row" alignItems="center" spacing={1} justifyContent="flex-end">
                                  {product.originalPrice && (
                                    <Typography
                                      sx={{
                                        color: alpha(colors.white, 0.5),
                                        textDecoration: 'line-through',
                                        fontSize: '0.9rem'
                                      }}
                                    >
                                      €{product.originalPrice}
                                    </Typography>
                                  )}
                                  <Typography variant="h5" color={colors.gold} fontWeight={900}>
                                    €{product.price}
                                  </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5} justifyContent="flex-end">
                                  <Rating value={product.rating} precision={0.1} readOnly size="small" />
                                  <Typography color={alpha(colors.white, 0.7)} fontSize="0.85rem">
                                    ({product.reviews})
                                  </Typography>
                                </Stack>
                              </Box>
                              
                              <Stack direction="row" spacing={1}>
                                <IconButton
                                  size="small"
                                  sx={{ color: colors.gold }}
                                  onClick={() => setSelectedProduct(product)}
                                >
                                  <RemoveRedEye />
                                </IconButton>
                                <Button
                                  variant="contained"
                                  startIcon={<AddShoppingCart />}
                                  onClick={() => addToCart(product)}
                                  sx={{
                                    background: colors.gradientGold,
                                    color: colors.black,
                                    fontWeight: 700,
                                    '&:hover': { background: colors.gradientGold }
                                  }}
                                >
                                  Add to Cart
                                </Button>
                              </Stack>
                              
                              <Typography
                                color={product.stock > 10 ? colors.gold : '#ff6b6b'}
                                fontSize="0.85rem"
                                fontWeight={600}
                              >
                                {product.stock} items available
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            ))}
          </Stack>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color={colors.gold} mb={2}>
              No products found
            </Typography>
            <Typography color={colors.goldSoft} mb={3}>
              Try adjusting your filters or search terms
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleFilterChange('clear', null)}
              sx={{
                borderColor: colors.gold,
                color: colors.gold,
                '&:hover': {
                  borderColor: colors.goldSoft,
                  background: alpha(colors.gold, 0.1)
                }
              }}
            >
              Clear All Filters
            </Button>
          </Box>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Stack direction="row" spacing={1}>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'contained' : 'outlined'}
                  sx={{
                    minWidth: 40,
                    background: page === 1 ? colors.gradientGold : 'transparent',
                    color: page === 1 ? colors.black : colors.gold,
                    borderColor: colors.gold,
                    fontWeight: 600,
                    '&:hover': {
                      background: page === 1 ? colors.gradientGold : alpha(colors.gold, 0.1)
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Stack>
          </Box>
        )}
      </Container>

      {/* Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClose={() => setFilters({ ...filters, open: false })}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Box>
  );
}