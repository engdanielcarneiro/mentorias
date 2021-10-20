import React, { useState, useEffect } from "react";

import { Container, Button, VisibleContainer } from "./styles";

function Page1({}) {
  const [isVisible, setIsVisible] = useState(false);

  function showComponent() {
    setIsVisible(true);
  }

  function hideComponent() {
    setIsVisible(false);
  }

  useEffect(() => {
    //   alert(isVisible);
    console.log(isVisible);
  }, [isVisible]);

  return (
    <Container>
      <Button onClick={showComponent}>EXIBIR COMPONENTE</Button>
      <Button onClick={hideComponent}>ESCONDER COMPONENTE</Button>
      {isVisible ? <VisibleContainer></VisibleContainer> : null}
    </Container>
  );
}

export default Page1;
