import React from "react";
import { useRouter } from "next/router";

function Index(props) {
  const router = useRouter();
  const { id } = router.query;
  return <div>coffee store number: {id}</div>;
}

export default Index;
