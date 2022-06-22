import React from "react";
import PageHeader from "../../component/PageHeader";

const TestExam = () => {
  return (
    <div>
      <PageHeader
        isDrawer={true}
        logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/rs_s_ai.png"
        title="Repeat Sentence"
        chip="Study Guide"
        content="You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once."
      />
    </div>
  );
};

export default TestExam;
