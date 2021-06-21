import React from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-secondary py-5">
      <Container style={{ maxWidth: 500 }}>
        <div className="d-flex justify-content-center">
          <h1 className="h6 text-center">
            Busque sugestões de estudos gratuitos por tecnologia
          </h1>
        </div>
        <InputGroup className="my-4">
          <InputGroup.Text>
            <Image src="/assets/icons/search.svg" width={20} height={20} />
          </InputGroup.Text>
          <FormControl
            id="inlineFormInputGroup"
            className="py-3"
            placeholder="Ex: react, git, etc"
          />
        </InputGroup>

        <div className="d-flex justify-content-between w-75 mx-auto">
          <Button onClick={() => console.log("oi")} variant="primary">
            Buscar stacks
          </Button>
          <Button onClick={() => console.log("oi")} variant="secondary">
            Sugerir stack
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
