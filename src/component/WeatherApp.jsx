/** @format */

import { connect } from "react-redux";
import React, { Component } from "react";
import { reqWeatherData } from "../redux/action/action";
import TextField from "@material-ui/core/TextField";
import * as Constants from "../redux/action/Constants";
import Container from "@material-ui/core/Container";
import {  IconButton, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

class WeatherApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			[Constants.SEARCH]: "",
			[Constants.KEY_DATA]:[],
			[Constants.NAME]:"",
			[Constants.MAIN]:"",
			[Constants.SYS]:""
		};
		
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { search } = this.state;
		let data = {
			[Constants.SEARCH]: search,
          };
        
		this.props.reqWeatherData(data.search, this);
		this.setState({
			search:""
		})
		
	};
	
	
	handleChange = (input) => (e) => {
		e.preventDefault();
		console.log("input", input);
		console.log("value", e.target.value);
		this.setState({
			[input]: e.target.value,
		});
	};
	
	render() {
		const { search ,main,sys,name} = this.state;
		return (
			<Container maxWidth="lg">
			<div>
			    <form onSubmit={this.handleSubmit}>
					<Typography style={styles.Typography}>Weather App</Typography>
					
					
                      <div style={styles.textField}>
                       <TextField
					        id="standard-basic"
							label="search by city name..."
							name="search"
							value={search}
							type="text"
							onChange={this.handleChange("search")}
							variant="outlined"
							
							
						/>
						<IconButton onClick={this.handleSubmit}>
					<SearchIcon />
					</IconButton>
</div>
				</form>
			</div>
			
				
					{
						this.state.data.map((item,key)=>{
							return <div key={key} >
							<h1>{item[Constants.MAIN]}</h1>
							<p>{name}({sys[Constants.COUNTRY]})</p>
							
							<p>Current tempreture {name} is  <strong>{main[Constants.TEMP]} °C</strong> </p>
							
							</div>
						})
					}
				
				

			
			</Container>
		);
	}
	handleResponse =(nextprops)=>{
		console.log("nextProps",nextprops)
		var respObj = null;
		if(nextprops){
			respObj ={
				[Constants.KEY_DATA]:nextprops.weather	,
				[Constants.MAIN]:nextprops.main,
				[Constants.NAME]:nextprops.name,
				[Constants.SYS]:nextprops.sys
			}
			this.setState(respObj)
		}
		
	}
}
const styles = {
	div: {
		border: "1px solid red",
		display: "flex",
		padding: 40,
		width: "300px",
		alignItem: "center",
		justifyContent: "center",
		marginTop: 70,
		bockgroundColor: "transparent",
	},
	Typography: {
		fontWidth: "bold",
		fontSize: "30px",
	},
	textField:{
		
		marginTop:45,
	}
};

const mapStateToProps = (response) => {
	console.log("response",response);
	return response;
};


export default connect(mapStateToProps, { reqWeatherData })(WeatherApp);
