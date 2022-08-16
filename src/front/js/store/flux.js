const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: JSON.parse(sessionStorage.getItem("token")) || [],
      activeUser: JSON.parse(sessionStorage.getItem("activeUser")) || null,
      workOrders: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getActiveUser: async (email) => {
        try {
          const res = await fetch(
            `${process.env.BACKEND_URL}/api/user/active`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const activeUser = await res.json();
          setStore({ activeUser: activeUser.email });
          sessionStorage.setItem("activeUser", activeUser.email);
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      login: async (email, password) => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          if (res.ok) {
            const token = await res.json();
            sessionStorage.setItem("token", JSON.stringify(token));
            console.log("The response is ok", res);
            getActions().getActiveUser(email);
            // navigate("/demo");

            return true;
          } else {
            throw "Something went wrong";
          }
        } catch (error) {
          throw Error("Wrong email or password");
        }
      },
      signup: async (
        email,
        password,

        setMessageState
      ) => {
        console.log(email);

        try {
          const res = await fetch(`${process.env.BACKEND_URL}/api/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          if (res.ok) {
            const token = await res.json();

            sessionStorage.setItem("token", JSON.stringify(token));
            console.log("The response is ok", res);
            getActions().getActiveUser(email);

            return true;
          } else {
            throw "Something went wrong";
          }
        } catch (error) {
          throw Error("Something went wrong");
        }
      },
      createWorkOrder: async (
        title,
        description,
        category,
        access_notes,
        entry_allowed,
        bill_to_customer,
        maintenance_notes,
        status
      ) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/workorder", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              category,
              access_notes,
              entry_allowed,
              bill_to_customer,
              maintenance_notes,
              status,
            }),
          });
          if (resp.ok) {
            alert("Work Order Created Successfully");
            return true;
          } else {
            throw "Something went wrong";
          }
        } catch (error) {
          return "Unable to Create Work Order", error;
        }
      },
      getAllWorkOrders: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/workorder");

          if (resp.ok) {
            const data = resp.json();
            setStore({ workOrders: data });
            console.log(getStore().workOrders);
            return data;
          } else {
            throw "Something went wrong with fetch";
          }
        } catch (error) {
          return "Unable to retrieve work order data", error;
        }
      },
      getWorkOrderByID: async (id) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/workorder/" + id
          );

          if (resp.ok) {
            const data = resp.json();
            return data;
          } else {
            throw "Something went wrong with fetch";
          }
        } catch (error) {
          return "Unable to retrieve work order data", error;
        }
      },
    },
  };
};

export default getState;
