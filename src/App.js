import UserList from './Profile/UserList';
import Section from './Profile/Section';
import users from './users.json';

export default function App() {
  return (
    <div>
      <Section>
        <UserList items={users} />
      </Section>

      <Section></Section>
    </div>
  );
}
