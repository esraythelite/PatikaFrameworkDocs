import ReactMarkdown from "react-markdown";
import React from "react"; 
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MDrenderer({ body}) {
  
	const navigate = useNavigate();
	useEffect(() => {
	  navigate('/')
	}, [ ])

	return (
		
		<ReactMarkdown>{body}</ReactMarkdown>
		
	)
}
