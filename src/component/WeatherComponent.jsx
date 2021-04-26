/** @format */

import { connect } from "react-redux";
import React, { Component } from "react";
import { reqWeatherData } from "../redux/action/action";
import TextField from "@material-ui/core/TextField";
import * as Constants from "../redux/action/Constants";
import Container from "@material-ui/core/Container";
import {  IconButton, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {toast} from "react-toastify";
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
        this.getWeatherData(data.search)
		this.setState({
			search:""
		})
		
	};
	getWeatherData=(data)=>{
		this.props.reqWeatherData(data, this);
	}
	
	
	handleChange = (input) => (e) => {
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
			<div className="div">
			    <form onSubmit={this.handleSubmit}>
					<Typography color="secondary" variant="h4">Weather App</Typography>
					<div className="textarea">
                       <TextField
					        id="standard-basic"
							label="search by city name..."
							name="search"
							value={search}
							type="text"
							onChange={this.handleChange("search")}
							className="textfield"
							variant="outlined"
							color="secondary"
						/>
						<IconButton className="btn"  onClick={this.handleSubmit}>
					      <SearchIcon />
					    </IconButton>
                       </div>
				</form>
			</div>
			
				
					{
						this.state.data !== undefined && this.state.data !== []  ? 
						this.state.data.map((item,key)=>{
							return <div key={key} >
							<h1>{item[Constants.MAIN]}</h1>
							<p>{name}({sys[Constants.COUNTRY]})</p>
							
							<p>Current tempreture {name} is  <strong>{main[Constants.TEMP]} °C</strong> </p>
							
							</div>
						}):null
					}
			</Container>
		);
	}
	handleResponse =(nextprops)=>{
		console.log("nextProps",nextprops);
		var respObj = null;
		
			
			if(nextprops.cod === 200){
				respObj ={
					[Constants.KEY_DATA]:nextprops.weather,
					[Constants.MAIN]:nextprops.main,
					[Constants.NAME]:nextprops.name,
					[Constants.SYS]:nextprops.sys
				}
				this.setState(respObj)
			}else{
				  toast(nextprops.message);	
				  this.setState({
					[Constants.KEY_DATA]:[],
					[Constants.NAME]:"",
					[Constants.MAIN]:"",
					[Constants.SYS]:""
				  });
				  console.log(this.state);
              }	
	}
}


const mapStateToProps = (response) => {
return {
		[Constants.KEY_DATA] :response};
};


export default connect(mapStateToProps, { reqWeatherData })(WeatherApp);
