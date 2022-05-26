import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import "./main.css";
import Logo from "../../Images/nails.png";
import { MdSmartphone, MdLock } from "react-icons/md";
import InputMask from "react-input-mask";

function Login() {
  return (
    <div className="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Logo} alt="#" style={{ maxWidth: "50%" }} />
          </div>
          <span class="login100-form-title p-b-26">Marcação de horário</span>
          <Container>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdSmartphone />}
                  color="gray.300"
                />
                <InputMask
                  placeholder="Numero do celular sem DDD"
                  mask={"99999-9999"}
                  className='class="chakra-input css-hcnv72'
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<MdLock />}
                />

                <Input placeholder="Senha" type={"password"} />
              </InputGroup>
            </Stack>
          </Container>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn">Login</button>
            </div>
          </div>

          <div class="text-center p-t-115">
            <span class="txt1">Don’t have an account?</span>

            <a class="txt2" href="#">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
