// import React from 'react';
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { Avatar, Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { styled } from "styled-components";
// import { Logout } from "@mui/icons-material";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import AlbumIcon from '@mui/icons-material/Album';
// import CheckroomIcon from '@mui/icons-material/Checkroom';
// import WatchIcon from '@mui/icons-material/Watch';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Fallen from '../../assets/images/fallenbranco.png';
// import StyledBoxEstudante from "../../components/StyledBoxEstudante";
// import StyledBoxEstudanteDois from "../../components/StyledBoxEstudanteDois";
// import StyledButtonEstudante from "../../components/StyledButtonEstudante";
// import StyledAvatar from '../../components/StyledAvatar';
// import StyledTypographyEstudante from '../../components/StyledTypographyEstudante';
// import StyledBoxOutlet from '../../components/StyledBoxOutlet';
// import StyledBoxMaior from '../../components/StyledBoxMaior';
// import Sidebar from './Sidebar';



// const Rotas = [
//     {
//         nome: 'Home',
//         destino: '/home/student/principal',
//     },
//     {
//         nome: 'Discos',
//         destino: '/home/student/discos',
//     },
//     {
//         nome: 'Sair',
//         destino: '',
//     }
// ]


// function HomeEstudante() {

//     const { logout, user, profile } = useContext(AuthContext);
//     const navigateTo = useNavigate();
//     const userContext = useContext(AuthContext);

 


//     const navigate = (destino) => {

//         navigateTo(destino);
//     };

//     return (
//         <>
//             <StyledBoxMaior>

        
           
//                 <StyledBoxEstudante>

               


//                         <StyledTypographyEstudante>
//                             Fallen Angels
//                         </StyledTypographyEstudante>

                       


//                         {Rotas.map(rota => (
//                             (userContext.user?.email === 'admin@admin.com' && rota.nome !== 'Discos') ||
//                                 (userContext.user?.email !== 'admin@admin.com' && rota.nome === 'Discos') ||
//                                 rota.nome === 'Home' || rota.nome === 'Sair'
//                                 ? (
//                                     <StyledButtonEstudante key={rota.destino} onClick={() => navigate(rota.destino)}>
//                                         {rota.nome}
//                                     </StyledButtonEstudante>
//                                 ) : null
//                         ))}

//                         <StyledAvatar
//                             alt="Imagem"
//                             src={Fallen}
                          
//                         />

                   

//                 </StyledBoxEstudante> 

               

//                 <Stack width={'100%'}>
//                     {userContext.user?.email !== 'admin@admin.com' && (
//                         <StyledBoxEstudanteDois>
//                             {profile?.nome}
//                             <Button onClick={() => navigate('/home/student/perfil')}>
//                                 <Avatar
//                                     alt="Imagem"
//                                     src={profile?.urlImage}
//                                 />
//                             </Button>
//                         </StyledBoxEstudanteDois>
//                     )}

//                         <Box sx={{padding:'1rem'}} >
                

//                         <Outlet />

//                         </Box>

                  
//                 </Stack>

                    

//             </StyledBoxMaior >




//         </>
//     );
// };

// export default HomeEstudante;