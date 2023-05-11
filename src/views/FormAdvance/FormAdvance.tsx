import { Todo } from "@inteligo/organism";
import { MainLayout } from "@inteligo/templates";

function FormAdvanceView() {
  return (
    <MainLayout title="Advance View">
      <div>
        <Todo showFormAdvance />
      </div>
    </MainLayout>
  );
}

export default FormAdvanceView;
