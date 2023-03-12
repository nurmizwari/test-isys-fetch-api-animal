import { useEffect, useState } from "react";
import { getAnimals } from "../services/animals";

export default function Animals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await getAnimals();
        if (response?.status === 200) {
          setData(response?.data.data);
        }
        console.log(response, "response");
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div>
      {data.map((child0: any, idx: number) => {
        return (
          <ul>
            <li>
              {idx + 1}. {child0.name}
            </li>
            {child0.children.map((child1: any, id: number) => {
              return (
                <>
                  <li style={{ marginLeft: 7 }}>
                    {idx === 0 ? id + 1 : 2}.{id + 1} {child1.name}
                  </li>
                  {child1.children?.map((child2: any, id3: number) => {
                    return (
                      <>
                        <li style={{ marginLeft: 14 }}>
                          {/* {id === 2 ?} */}
                          {idx === 0 ? (id3 = 1) : 2}.
                          {id === 0
                            ? id + 1
                            : id || id === 1
                            ? id + 1
                            : id || id === 3
                            ? id + 1
                            : id}
                          .{id3 + 1} {child2.name}
                        </li>
                        {child2.children.map((child3: any, id4: number) => {
                          return (
                            <>
                              <li style={{ marginLeft: 28 }}>
                                {" "}
                                2.1.1.{id4 + 1}
                                {child3.name}
                              </li>
                              {child3.children.map(
                                (child4: any, id5: number) => {
                                  return (
                                    <li style={{ marginLeft: 43 }}>
                                      2.1.2.{id5 + 1} {child4.name}
                                    </li>
                                  );
                                }
                              )}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
