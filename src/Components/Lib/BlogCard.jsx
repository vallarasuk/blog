import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

const BlogCard = ({
  title,
  imageUrl,
  description,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <Card className="mb-4 border-0 shadow">
      <CardImg top width="100%" src={imageUrl} alt="Blog Post" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button color="primary" href={buttonLink} target="_blank">
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
