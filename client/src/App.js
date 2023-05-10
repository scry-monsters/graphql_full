
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./Layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache,
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
     <Route index element={<Home />} />
     <Route path="/projects/:id" element={<Project />} />
     <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
	return (
		<>
			<ApolloProvider client={client}>
      <RouterProvider router={router}/>
			</ApolloProvider>
		</>
	);
}

export default App;
