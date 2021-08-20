import { Grid, Box, withWidth, 
		 Typography, ListItem, ListItemIcon, 
		 ListItemText, Icon, List,
		 ListSubheader, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';	 

const Content = () => {
	
	const useStyle = makeStyles((theme) => ({
		
		mainText: {
			
			[theme.breakpoints.only('xs')]:{
				
				
			},
			
			[theme.breakpoints.between('sm', 'xl')]:{
				
				width: '50vw'
				
			}
			
		},
		
		stacks: {
			
			[theme.breakpoints.only('xs')]:{
				
				display: 'flex',
				flexDirection: 'column'
				
			},
			
			[theme.breakpoints.between('sm', 'xl')]:{
				
				display: 'flex',
				flexDirection: 'row',
				marginLeft: '35%'
				
			}
			
		},		
		
		welcome: {
			
			width: '80%',
			alignSelf: 'center',
			letterSpacing: '6px',
			marginTop: '10vh',
			width: '80%',
			marginBottom: '10vh'
					
		},
		
		  imageIcon: {
		display: 'flex',
		height: 'inherit',
		width: 'inherit'
		}
		
	}))
	
	const classes = useStyle();

	return(<>
	


				<Box className={classes.welcome}>
					<Typography variant='h4' style={{float: 'left'}}>Hi!</Typography><br />
					<Typography variant='h6' style={{float: 'left'}}>
						My name is Rodrigo Burgos, i'm a fullstack developer located on Salvador, Bahia, Brazil who work as a freelancer
						for many groups all around the globe. I can comunicate perfectly in english and would love to join in projects
						involving exploratory data analisis and blockchain development.
					</Typography>
				</Box>
				
					<Divider />

		<Typography style={{marginTop: '15vh', marginBottom: '15vh', marginLeft: '5vw'}} variant='h4'>Languages and frameworks</Typography>
		<Grid container spacing={3} style={{width: '80%', marginLeft: '10%'}}>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<img style={{float: 'right'}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'} width={120} height={120} />
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h6' style={{float: 'left'}}>
					I'm absolutely familiarized to javascript E6, i can perfome async functions, promisses and callbacks, i work well with objects and arrays. 	
				</Typography>						
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h6' style={{float: 'left'}}>
					I'm pretty much updated about solidity versions, can work well with async functions, deal witth array and objects. 	
				</Typography>						
			</Grid>			
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<img src={'https://plugins.jetbrains.com/files/9475/125999/icon/pluginIcon.svg'} width={120} height={120} />
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<img style={{float: 'right'}} src={'https://reactstrap.github.io/assets/logo.png'} width={120} height={120} />
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h6' style={{float: 'left'}}>
					I can build application with functional components, very familiarized with hooks and useEffect.
				</Typography>						
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h6' style={{float: 'left'}}>
					I also can build application with SSR, comunicated well with API's and work with routing system.
				</Typography> 							
			</Grid>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<img  src={'https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png'} width={120} height={120} />
			</Grid>
			
			<Divider />		
			
		</Grid>
		<Typography style={{marginTop: '10vh', marginLeft: '5vw', marginBottom: '10vh' }} variant='h4'>
			Other stacks
		</Typography>
		<Box className={classes.stacks}>
		
			<Box style={{marginBottom: '10vh'}} >
			<List mr='55px' aria-labelledby="nested-list-subheader">
				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://www.blogson.com.br/wp-content/uploads/2020/12/logo-mysql-mysql-logo-png-images-are-download-crazypng-211.png"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="MySQL" />
				</ListItem>
								
				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://w7.pngwing.com/pngs/359/1024/png-transparent-firebase-cloud-messaging-computer-icons-google-cloud-messaging-android-angle-triangle-computer-programming-thumbnail.png"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Firebase" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="GraphQL" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://www.bitquery.io/assets/bitquery-81a3af644ad997ac3008f683a85779871f1a6abbdf82b551b7112330f2fd69db.png"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Bitquery" />
				</ListItem>
			</List>
			</Box>
			<Box>
				<List mr='55px' aria-labelledby="nested-list-subheader">
				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://www.pngkey.com/png/full/985-9851920_logo-web3-yeet-web3js-logo.png"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Web3" />
				</ListItem>
								
				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://avatars.githubusercontent.com/u/22205159?s=280&v=4"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Truffle Suite" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX///9OXuVjr/pi0vh/iepJWuVEVuStsvKM3Ppfrfpa0PiNwvq05/z29v05TeJTz/j2/P9Uqvnw9/7N5P1zuPlSqPr6+v6o0ftutfrT5/211/yizvva6/3s9f7J4v11gOiHkOszSOLHzPbk5/ufpu9UY+VteuiXn+7BxvRndOfc3vm3vfNhb+aLletbauYtROG82/yTx/vO8P2u5vvh9v572PmW3/p/vfqQs4u+AAADNElEQVR4nO3cW1PaUBSG4TQ0qRyEgJUCUq09n4si5f//s0Idp1qVtZOwXGtn3ufai7wT5iM72iYJAAAAAAAAAAAAAAAAAAAAAAAA9ufw7Lm+N6aF55m687emhf1n2rIzy8CnKMzfNbwwf28a+ASFH8YNL+x/tg1UL8w+GgeqFxrPjH5h/sk6ULvQembUC81nRrsw+2KdlygX2s9MolvoYGYS5Xt4aF23pViYO5iZRLMw+27ddk2vMP9q3XZNrdDHzCSa99DFzCR6hf1v1mU3lAq9zEyiVuhlZhKtwvyHddc/OoWZl5lJlApzNzOT6BRmP62rbjv8le9d38/MbIxf7J+nzyhQFOP/FYX1Re3LfHGxnqTte45fWV/ZXswv2sNNTfqAifW17cNiMnwwbms4tb66+k4nj+alabtrfXm1jdbHj/dtbuHI+gLrOkp33MDNLZxZX2Bds+GuvgbMzIkQGP3MSIHRz8xCCIx+ZqZiYOQzUwh98c/Mxc6viTT+mZnu/KJPGzAzL6XPaOwzM5M+o+3ID00jKTD6mek2fWbm0ldh9DMzkT6j0c+MeAuZGeeYmehnhqeZ2N/NjKQ7GP3MyIemI+tLrGfOoWn42voS6+FpJvqZkZ9mYp8Z8TO6tr7Emjg0NX9mUutLrIlDU/xPM+ItjP1ppvGvgIW++J9mODQxM96Jv7GPfmYaf2hq/sw0/tDEu5m7M1NcXfYkS1d/GV3qaeZqueoMOqKBq8LwdzNFrzXotEK4KhRnJr15mum1wvK8FYY+zVytgvt8FYbOzHIQ3ueqMHRmDkrcQF+F8tPM6fbHynxCfRUGHprKBjoqDJuZ32UD/RTKh6aTzU/1So2Mq8KwQ9OofKCbwrCZWZUP9FIYdmi6rHALvRSGzUyFPi+FYe9mlqV31E2h/I8Ntr9pqjIzXgrD3s2U/q73UygfmirPjJNCxZnxURh2aKo2My4KAw5NReWZcVEY9jRT8lDoqVA+NNWZGQ+FujPjoDDs0FR5ZuwLw/5upvrM2Bdqz4x54Xx4//8nuet6ZuR3917f6p90Beu/72YO6lhZbykAAAAAAAAAAAAAAAAAAAAAAECz/AEDl2oFFIzRjAAAAABJRU5ErkJggg=="/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Openzeppelin" />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<Icon classes={{root: classes.iconRoot}}>
						  <img className={classes.imageIcon} src="https://img1.gratispng.com/20180420/zww/kisspng-plotly-data-visualization-chart-javascript-hottest-5ada7012d34354.6940131715242649788653.jpg"/>
						</Icon> 
					</ListItemIcon>	
					<ListItemText primary="Plotly" />
				</ListItem>
			</List>		
			</Box>
		</Box>
	</>)

}

export default withWidth()(Content);