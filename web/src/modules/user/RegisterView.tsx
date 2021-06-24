import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export const RegisterView = () => {
  const [registerMutation, { data }] = useMutation(REGISTER_MUTATION);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);

  return (
    <div>
      RegisterView
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerMutation({ variables: { email, password } });
          setEmail("");
          setPassword("");
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">button</button>
        <p>{data?.register}</p>
        {console.log(data?.register)}
      </form>
    </div>
  );
};
