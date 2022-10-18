import ReactMarkdown from "react-markdown";
import React from "react";

export default function MDrenderer({ body }) {
	return <ReactMarkdown>{body}</ReactMarkdown>;
}
