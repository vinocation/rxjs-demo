import React from "react";
import { Input } from "antd";
import { useFetch } from "./useFetch";
import UserCard from "../../components/UserCard";

const Index = (props) => {
  const [value, onChange] = useFetch(
    (e) => {
      if (e && e.target && e.target.value) {
        return e.target.value;
      } else {
        return undefined;
      }
    },
    {
      // 防抖
      debounce: 1000,
    }
  );
  const { loading, data } = value;
  return (
    <div>
      <Input
        onChange={onChange}
        placeholder="github username"
        style={{ marginBottom: 18 }}
      />
      {loading ? <h3>Loading...</h3> : data && <UserCard {...data} />}
    </div>
  );
};

export default Index;
