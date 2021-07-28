import React from 'react';
import { Link } from "react-router-dom";
import './BlogCard.scss'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const BlogCard = (props) => {
 return (
    <>
      <Card className="blogcard__container">
        <CardImg top width="100%" src={props.blog.imgLink} alt="Card image cap" />
        <CardBody className="blogcard__cardBody">
          <CardTitle tag="h5">{props.blog.heading}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted blogcard__cardBody__cardSubtitle">Published - {props.blog.publishedOn}</CardSubtitle>
          <CardText>To start with web development, you don’t require a computer science degree. Anyone can start no matt...</CardText>
        </CardBody>
        <hr />
        <div className="blogcard__footer">
          <p>5 min read</p>
          <Link to={`mywaysblog/blog/${props.blog._id}`}>Read More</Link>
        </div>
      </Card>
    </>
  );
};

export default BlogCard;