
import Page from "../../components/containers/Page";
import Container from "../../components/containers/Container";
import Header from "../Header";
import Link from "next/link";
import Text from "../../components/typography/Text";

const Dashboard = () => {
  return (
    <Container className="min-h-screen bg-primary">
      
      <Header>
        <Header.Title>Raven</Header.Title>
      </Header>

      <nav className="flex flex-wrap justify-center gap-2 p-3 bottom-line bg-secondary">
        <Text className="font-bold underline"><Link href="/">Home</Link></Text>
      </nav>

    </Container>
  );
};

export default Dashboard;

