import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
  Backdrop,
  CircularProgress
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Diamond,
  Close,
  StarBorder,
  ChevronRight
} from '@mui/icons-material';

const premiumColors = {
  noir: '#1a1a1a',
  gold: '#d4af37',
  goldLight: '#f4e4a6',
  goldDark: '#b8941f',
  charcoal: '#2d2d2d',
  white: '#ffffff',
  error: '#ff4757'
};

const glassStyle = {
  background: `linear-gradient(135deg, ${premiumColors.noir}99 0%, ${premiumColors.charcoal}99 100%)`,
  backdropFilter: 'blur(32px)',
  WebkitBackdropFilter: 'blur(32px)',
  border: `1px solid ${premiumColors.gold}32`,
  boxShadow: `
    0 30px 90px ${premiumColors.gold}20,
    0 12px 45px ${premiumColors.noir}50,
    inset 0 1px 0 ${premiumColors.gold}25,
    inset 0 -1px 0 ${premiumColors.gold}15
  `,
  borderRadius: { xs: 12, lg: 16 }, // CHANGE: Adjust borderRadius values to scale size
  overflow: 'hidden'
};

const Login = ({ onClose, onSwitchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 2400));
    
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    
    setErrors(newErrors);
    if (!Object.keys(newErrors).length) {
      console.log('Login success:', formData);
    }
    setIsLoading(false);
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <Box sx={{
      width: '99vw',
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${premiumColors.charcoal} 0%, ${premiumColors.noir} 50%, ${premiumColors.charcoal} 100%)`,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: { xs: 3, lg: 5 }, // CHANGE: Adjust py values to scale vertical padding
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 12% 88%, ${premiumColors.gold}14 0%, transparent 48%),
          radial-gradient(circle at 88% 12%, ${premiumColors.gold}10 0%, transparent 52%),
          radial-gradient(circle at 50% 50%, ${premiumColors.gold}05 0%, transparent 70%)
        `,
        pointerEvents: 'none',
        animation: 'pulse 12s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 }
        }
      }
    }}>
      {/* Animated Ornaments */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '6%',
        animation: 'float 8s ease-in-out infinite',
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(6deg)' }
        }
      }}>
        <Diamond sx={{ 
          fontSize: { xs: 40, lg: 60 }, // CHANGE: Adjust fontSize values to scale ornament size
          color: premiumColors.gold, 
          opacity: 0.14,
          filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))'
        }} />
      </Box>

      <Box sx={{
        position: 'absolute',
        bottom: '16%',
        right: '8%',
        animation: 'float 10s ease-in-out infinite reverse',
        animationDelay: '2s'
      }}>
        <StarBorder sx={{ 
          fontSize: { xs: 30, lg: 50 }, // CHANGE: Adjust fontSize values to scale ornament size
          color: premiumColors.gold, 
          opacity: 0.12,
          filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.25))'
        }} />
      </Box>

      <Box sx={{ 
        width: '100%', 
        px: { xs: 2, sm: 3, md: 5, lg: 8, xl: 12 }, // CHANGE: Adjust px values to scale horizontal padding
        maxWidth: 'none'
      }}>
        <Zoom in timeout={{ enter: 1000 }} style={{ transitionDelay: '150ms' }}>
          <Paper
            elevation={0}
            sx={{
              ...glassStyle,
              width: '100%',
              mx: 'auto',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.03) 0%, transparent 50%)',
                pointerEvents: 'none',
                borderRadius: 'inherit'
              }
            }}
          >
            {/* Ultra-Premium Header */}
            <Box sx={{
              background: `linear-gradient(135deg, ${premiumColors.gold} 0%, ${premiumColors.goldDark} 100%)`,
              py: { xs: 3, lg: 2 }, // CHANGE: Adjust py values to scale header height
              px: { xs: 3, lg: 3 }, // CHANGE: Adjust px values to scale header padding
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 2.5s infinite',
                '@keyframes shimmer': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' }
                }
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${premiumColors.white}20, transparent)`
              }
            }}>
              {onClose && (
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: 'absolute',
                    right: { xs: 12, lg: 24 }, // CHANGE: Adjust right/top to reposition close button
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: premiumColors.noir,
                    background: premiumColors.white + '50',
                    width: { xs: 36, lg: 48 }, // CHANGE: Adjust width/height to scale close button
                    height: { xs: 36, lg: 48 },
                    backdropFilter: 'blur(8px)',
                    '&:hover': { 
                      background: premiumColors.white + '70',
                      transform: 'translateY(-50%) scale(1.05)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <Close sx={{ fontSize: { xs: 20, lg: 26 } }} /> {/* CHANGE: Adjust fontSize to scale close icon */}
                </IconButton>
              )}

              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  color: premiumColors.noir,
                  mb: 1, // CHANGE: Adjust mb to scale spacing below title
                  fontSize: { 
                    xs: '2rem', 
                    sm: '2.5rem', 
                    md: '3.5rem', 
                    lg: '4.5rem', 
                    xl: '5rem' 
                  }, // CHANGE: Adjust fontSize values to scale title
                  letterSpacing: { xs: '-0.5px', lg: '-1px' },
                  textShadow: `3px 3px 12px ${premiumColors.noir}40`,
                  position: 'relative',
                  '&::after': {
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: { xs: '0.5rem', lg: '0.7rem' }, // CHANGE: Adjust fontSize to scale subtitle
                    color: premiumColors.noir + '40',
                    fontWeight: 400,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    mt: 0.5 // CHANGE: Adjust mt to scale spacing
                  }
                }}
              >
                Connexion
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: premiumColors.noir + 'F0',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', lg: '1.2rem' }, // CHANGE: Adjust fontSize to scale description
                  maxWidth: '900px',
                  mx: 'auto',
                  letterSpacing: '0.3px'
                }}
              >
                Accédez à votre espace exclusif Tawakkol
              </Typography>
            </Box>

            {/* Form Body */}
            <Box sx={{ 
              p: { xs: 3, md: 5, lg: 8, xl: 10 }, // CHANGE: Adjust p values to scale form padding
              position: 'relative'
            }}>
              <Fade in timeout={1400}>
                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: 2, lg: 4 }, // CHANGE: Adjust gap to scale spacing between fields
                    mb: { xs: 3, lg: 5 } // CHANGE: Adjust mb to scale bottom margin
                  }}>
                    <TextField
                      fullWidth
                      label="Adresse Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: premiumColors.white,
                          fontSize: { xs: '0.9rem', lg: '1rem' }, // CHANGE: Adjust fontSize to scale input text
                          height: { xs: 50, lg: 60 }, // CHANGE: Adjust height to scale input field
                          borderRadius: 2, // CHANGE: Adjust borderRadius to scale corners
                          transition: 'all 0.3s ease',
                          '& fieldset': {
                            borderColor: premiumColors.gold + '60',
                            borderWidth: 2 // CHANGE: Adjust borderWidth to scale border thickness
                          },
                          '&:hover fieldset': {
                            borderColor: premiumColors.gold + '80',
                            boxShadow: `0 0 0 1px ${premiumColors.gold}60`
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: premiumColors.gold,
                            boxShadow: `0 0 0 2px ${premiumColors.gold}40, 0 0 20px ${premiumColors.gold}30`
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: premiumColors.goldLight + 'A0',
                          fontSize: { xs: '0.9rem', lg: '1rem' }, // CHANGE: Adjust fontSize to scale label
                          fontWeight: 600,
                          '&.Mui-focused': { 
                            color: premiumColors.gold,
                            fontWeight: 700
                          }
                        },
                        '& .MuiFormHelperText-root': {
                          color: premiumColors.error,
                          fontWeight: 600,
                          fontSize: '0.8rem' // CHANGE: Adjust fontSize to scale helper text
                        },
                      }}
                      InputProps={{
                        style: { 
                          color: premiumColors.white, 
                          fontFamily: "'Inter', sans-serif", 
                          fontWeight: 600 
                        }
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Mot de Passe"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange('password')}
                      error={!!errors.password}
                      helperText={errors.password}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: premiumColors.white,
                          fontSize: { xs: '0.9rem', lg: '1rem' },
                          height: { xs: 50, lg: 60 },
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '& fieldset': {
                            borderColor: premiumColors.gold + '60',
                            borderWidth: 2
                          },
                          '&:hover fieldset': {
                            borderColor: premiumColors.gold + '80',
                            boxShadow: `0 0 0 1px ${premiumColors.gold}60`
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: premiumColors.gold,
                            boxShadow: `0 0 0 2px ${premiumColors.gold}40, 0 0 20px ${premiumColors.gold}30`
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: premiumColors.goldLight + 'A0',
                          fontSize: { xs: '0.9rem', lg: '1rem' },
                          fontWeight: 600,
                          '&.Mui-focused': { 
                            color: premiumColors.gold,
                            fontWeight: 700
                          }
                        }
                      }}
                      InputProps={{
                        style: { 
                          color: premiumColors.white, 
                          fontFamily: "'Inter', sans-serif", 
                          fontWeight: 600 
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              sx={{ 
                                color: premiumColors.gold, 
                                p: { xs: 1, lg: 1.5 }, // CHANGE: Adjust p to scale icon padding
                                '&:hover': {
                                  background: premiumColors.gold + '20',
                                  transform: 'scale(1.1)'
                                }
                              }}
                            >
                              {showPassword ? 
                                <VisibilityOff sx={{ fontSize: { xs: 20, lg: 24 } }} /> :  // CHANGE: Adjust fontSize to scale visibility icon
                                <Visibility sx={{ fontSize: { xs: 20, lg: 24 } }} />
                              }
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: { xs: 3, lg: 5 },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 0 }
                  }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberMe}
                          onChange={e => setRememberMe(e.target.checked)}
                          sx={{
                            color: premiumColors.gold,
                            '&.Mui-checked': { color: premiumColors.gold },
                            p: { xs: 1, lg: 1.5 }, // CHANGE: Adjust p to scale checkbox padding
                            '& .MuiSvgIcon-root': {
                              fontSize: { xs: 20, lg: 24 } // CHANGE: Adjust fontSize to scale checkbox icon
                            }
                          }}
                        />
                      }
                      label={
                        <Typography sx={{
                          color: premiumColors.goldLight,
                          fontSize: { xs: '0.9rem', lg: '1rem' },
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600
                        }}>
                          Rester connecté
                        </Typography>
                      }
                    />

                    <Button sx={{
                      color: premiumColors.gold,
                      textTransform: 'none',
                      fontSize: { xs: '0.9rem', lg: '1rem' },
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      px: 2, // CHANGE: Adjust px/py to scale button size
                      py: 1,
                      borderRadius: 2,
                      background: premiumColors.gold + '15',
                      '&:hover': {
                        color: premiumColors.goldLight,
                        background: premiumColors.gold + '25',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${premiumColors.gold}30`
                      },
                      transition: 'all 0.3s ease'
                    }}>
                      Mot de passe oublié ?
                    </Button>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    disabled={isLoading}
                    sx={{
                      background: `linear-gradient(45deg, ${premiumColors.gold}, ${premiumColors.goldDark})`,
                      color: premiumColors.noir,
                      py: { xs: 1.8, lg: 2.5 }, // CHANGE: Adjust py to scale button height
                      borderRadius: 3, // CHANGE: Adjust borderRadius to scale corners
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1rem', lg: '1.2rem' }, // CHANGE: Adjust fontSize to scale button text
                      textTransform: 'none',
                      mb: { xs: 3, lg: 5 },
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: `0 20px 50px ${premiumColors.gold}40, 0 0 0 1px ${premiumColors.gold}60`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${premiumColors.goldLight}, ${premiumColors.gold})`,
                        transform: 'translateY(-4px) scale(1.01)',
                        boxShadow: `0 30px 70px ${premiumColors.gold}50, 0 0 0 2px ${premiumColors.gold}`
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0, left: '-200%',
                        width: '200%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${premiumColors.white}35, transparent)`,
                        transition: 'left 0.8s'
                      },
                      '&:hover::before': { left: '100%' },
                      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                  >
                    {isLoading ? 'Connexion en cours...' : 'Se Connecter'}
                  </Button>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{
                      color: premiumColors.goldLight + 'E0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: '0.95rem', lg: '1.1rem' },
                      fontWeight: 600,
                      letterSpacing: '0.3px'
                    }}>
                      Première visite ?{' '}
                      <Button
                        onClick={onSwitchToSignup}
                        endIcon={<ChevronRight sx={{ fontSize: { xs: 20, lg: 24 }, ml: -0.5 }} />} // CHANGE: Adjust fontSize to scale chevron
                        sx={{
                          color: premiumColors.gold,
                          textTransform: 'none',
                          fontWeight: 800,
                          fontSize: { xs: '0.95rem', lg: '1.1rem' },
                          fontFamily: "'Inter', sans-serif",
                          p: 0,
                          '&:hover': {
                            color: premiumColors.goldLight,
                            background: 'transparent',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px'
                          }
                        }}
                      >
                        Créer un compte
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Box>
          </Paper>
        </Zoom>
      </Box>

      {/* Ultra-Premium Loading */}
      <Backdrop
        open={isLoading}
        sx={{
          color: premiumColors.gold,
          zIndex: 9999,
          background: premiumColors.noir + 'F8',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress
            size={isLarge ? 80 : 60} // CHANGE: Adjust size to scale loader
            thickness={2} // CHANGE: Adjust thickness to scale loader ring
            sx={{ 
              color: premiumColors.gold, 
              mb: 3,
              filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.6))'
            }}
          />
          <Typography sx={{
            color: premiumColors.goldLight,
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.2rem', lg: '1.6rem' }, // CHANGE: Adjust fontSize to scale loading text
            fontWeight: 700,
            letterSpacing: '1px',
            textShadow: `0 0 20px ${premiumColors.gold}40`
          }}>
            Connexion sécurisée...
          </Typography>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Login;