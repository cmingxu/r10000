import React from 'react';

export const Resume = () => {
  return (
    <div className="resume">
      <h1 className="text-2xl font-bold">济南一高张老师</h1>
      <section className="personal-summary">
        <p className="text-gray-700">拥有超过15年教育经验的资深中学教师，擅长数学和科学领域。致力于通过创新教学方法激发学生的兴趣和参与度，提高他们的学术成就。在课程设计、学生评估和教师培训方面具有丰富的经验。</p>
      </section>

      <section className="work-experience mt-8">
        <div className="job mb-4">
          <h3 className="text-lg font-semibold">资深中学教师</h3>
          <p className="text-gray-500">[学校名称] | [开始年份] - 至今</p>
          <ul className="mt-2 list-disc pl-5">
            <li className="text-gray-700">设计与实施数学和科学课程，以满足不同学习风格和能力水平的学生需求。</li>
            <li className="text-gray-700">利用最新的教育技术和资源，提高课堂互动性和学生的参与度。</li>
            <li className="text-gray-700">定期评估学生进度，提供个性化反馈和辅导，以支持他们的学术成长。</li>
            <li className="text-gray-700">与家长和同事进行有效沟通，确保学生在学术和个人成长方面得到全面支持。</li>
            <li className="text-gray-700">参与学校课程开发委员会，为课程改进和创新提供意见。</li>
            <li className="text-gray-700">指导和培训新教师，分享教学经验和最佳实践。</li>
          </ul>
        </div>
      </section>

      <section className="professional-development mt-8">
        <h2 className="text-xl font-bold">专业发展</h2>
        <ul className="mt-2 list-disc pl-5">
          <li className="text-gray-700">参加教育研讨会和会议，以保持对最新教育趋势和实践的了解。</li>
          <li className="text-gray-700">完成高级教育课程和认证，以提升教学技能和知识。</li>
        </ul>
      </section>

      <section className="skills mt-8">
        <h2 className="text-xl font-bold">技能</h2>
        <ul className="mt-2 list-disc pl-5">
          <li className="text-gray-700">课程设计和实施</li>
          <li className="text-gray-700">学生评估和反馈</li>
          <li className="text-gray-700">教育技术应用</li>
          <li className="text-gray-700">教师培训和发展</li>
          <li className="text-gray-700">家长沟通和协调</li>
        </ul>
      </section>

      <section className="language-skills mt-8">
        <h2 className="text-xl font-bold">语言能力</h2>
        <p className="text-gray-700">[语言] - [熟练程度]</p>
      </section>
    </div>
  );
};

