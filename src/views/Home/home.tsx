import { Todo } from "@inteligo/organism";
import { MainLayout } from "@inteligo/templates";

function HomeView() {
  return (
    <MainLayout title="Home View">
      <div>
        <Todo />
      </div>
    </MainLayout>
  );
}

export default HomeView;
