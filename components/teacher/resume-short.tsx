import React from 'react';

export const ResumeShort = () => {
  return (
    <div className="resume">
      <h3 className="text-lg font-semibold">济南一高张老师</h3>

      <section className="personal-summary">
        <p className="text-gray-700">拥有超过15年教育经验的资深中学教师，擅长数学和科学领域。致力于通过创新教学方法激发学生的兴趣和参与度，提高他们的学术成就。在课程设计、学生评估和教师培训方面具有丰富的经验。</p>
      </section>

      <section className="work-experience mt-8">
        <div className="job mb-4">
          <h3 className="text-lg font-semibold">资深中学教师</h3>
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
    </div>
  );
};

