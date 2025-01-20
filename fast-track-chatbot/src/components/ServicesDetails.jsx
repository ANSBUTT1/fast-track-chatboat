import React from "react";
import { useParams, Link } from "react-router-dom"; // For dynamic routing

const ServiceDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  // Mock data based on the provided details
  const services = [
    {
      id: 1,
      title: "Business Process Review",
      description: `
        <p>For business owners, developing and maintaining efficient processes is a critical element to establishing sustainable growth. However, without industry experience or an understanding of best accounting and tax practices, entrepreneurs may be missing out on important opportunities to save money, lower liabilities, and improve their profit margins.</p>
        <p>At FasTrak Enterprise, our team works directly with clients to evaluate existing processes and make changes to ongoing business strategy. Combined with our other small business services, FasTrak Enterprise is able to help business owners set the right foundation for achieving future financial success.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Improving a Business Efficiency</h3>
        <p>As a business grows, new processes need to be developed in order to support various associated costs. Without careful planning, haphazard process creation can lead to redundancies between different departments. Over time, these inefficiencies can cost a company hundreds of thousands dollars in lost revenue and resources, preventing businesses from achieving profitable growth.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Making Your Enterprise More Efficient</h3>
        <p>At our firm, our goal is to help businesses make the most of their available resources and maximize potential profits. Through our unique Business Process Review, we take a global and in-depth look at every facet of your enterprise to identify overlaps and create solutions that yield a more efficient, more profitable business.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Schedule Your Consultation</h3>
        <p>Since 2000, our firm has helped businesses and entrepreneurs from diverse industries make the most of their resources. Through our business process review service, FasTrak Enterprise is able to help clients improve their existing strategies and put in motion the processes that contribute to future financial success. For more information about this unique service, contact our team today to schedule your consultation.</p>
      `,
    },
    {
      id: 2,
      title: "Financial Modeling",
      description: `
        <p><strong>Without a robust and reliable financial model, key decision makers can find themselves struggling to make the strategic choices that support the ultimate goals of their business. At FasTrak Enterprise, our comprehensive financial modeling services are tailored to provide this key component for clients from throughout the greater region.</strong></p>
        <h3 class="text-2xl font-semibold text-primary mt-8">The Advantages of Proactive Financial Modeling</h3>
        <p>From obtaining capital funding to negotiating the acquisition of a business, understanding trends and being able to project the future growth or negative cash-flow of an enterprise is critical to making a number of diverse yet important business decisions. While the evaluation of every account within a business can provide some insight into the wellbeing of a company, the development of a relevant, comprehensive financial model offers clients an extensive and accurate illustration of the business financial health as a whole.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">How Financial Models Work</h3>
        <p>Effective financial models are designed to provide insight into the interaction and yield of different financial processes. With a flexible yet comprehensive financial model, variables can be independently isolated and manipulated to project expected yields following changes in business or tax strategy. For decision makers looking to strengthen the profitability of their enterprise, this innovative tool provides the opportunity to identify vulnerabilities and make necessary changes to prevent the interruption of sustainable business growth.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Supporting External Business Efforts</h3>
        <p>Financial models also provide enterprises with the opportunity to support their business externally. At our CPA firm, financial models are often requested for businesses facing:</p>
        <ul class="list-disc pl-6">
          <li>Joint Project Funding between private sector bidders and public sector procurers</li>
          <li>Investment Appraisal for large capital investment projects</li>
          <li>Corporate Reporting</li>
          <li>Audits and Reviews</li>
          <li>Working Capital Analysis</li>
          <li>Mergers or Acquisitions</li>
        </ul>
        <h3 class="text-2xl font-semibold text-primary mt-8">Developing a Financial Model</h3>
        <p>At FasTrak Enterprise, creating a relevant financial model begins with an in-depth evaluation of each financial facet of your enterprise. Through careful assessment and examination, each unique factor is included to ensure the resulting model accurately reflects the current financial standing of the enterprise. By focusing on a transparent structure and clear modeling style, our CPA is able to provide clients with a readily understood presentation.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Schedule Your Consultation Today</h3>
        <p>Located in [Location], FasTrak Enterprise is dedicated to providing businesses with the relevant information needed to make strategic business decisions. For more information about our financial modeling services, contact our team today.</p>
      `,
    },
    {
      id: 3,
      title: "Personal Financial Planning",
      description: `
        <h3 class="text-2xl font-semibold text-primary mt-8">Personal Financial Planning</h3>
        <p>You get one-on-one guidance and a comprehensive financial plan that helps manage risk, improve performance, and ensure the growth and longevity of your wealth.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Estate Planning</h3>
        <p>The hassles and red tape associated with estate planning can be daunting, but you don’t need to do it alone. Our team is waiting to assist you through every step of the process.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Elder Care</h3>
        <p>With our elder care services, you get the help of a caring, honest, and knowledgeable professional. Someone on your team, looking out for your loved one’s best interest.</p>
      `,
    },
    {
      id: 4,
      title: "Small Business Accounting",
      description: `
        <h3 class="text-2xl font-semibold text-primary mt-8">Small Business Accounting</h3>
        <p>As a small business owner, you have more important things to do than to keep your own books. We take care of your books for you, so you can get back to the job of running your business and generating profits.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Bookkeeping Services</h3>
        <p>Accurate bookkeeping is essential to your company’s long-term viability. Experienced, affordable, and reliable, we serve a variety of industries and clients.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Payroll Services</h3>
        <p>You might be able to handle payroll on your own, but wouldn’t your time be better spent on developing new products or services for your business?</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">CFO Services</h3>
        <p>Our Part-Time CFO service gives you a professional financial manager who works with you to help guide your business to success.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Audits – Reviews – Compilations</h3>
        <p>Your stockholders, creditors, or private investors have different levels of risk tolerance, so we provide three levels of assurance to meet your needs.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Cash Flow Management</h3>
        <p>A cash crisis can be emotionally devastating. It can even kill your business. The starting point for avoiding a cash crisis is allowing us to develop a cash flow projection for you.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Bank Financing</h3>
        <p>Requesting a business loan without adequate preparation sends a clear message to the lender: High Risk! It pays to be prepared and organized in your approach for financing.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Business Valuation</h3>
        <p>Objective valuation can make the difference between loss or gain, success or failure. You need professionals who are well qualified, with significant experience in evaluating all types of organizations.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Business Planning Services</h3>
        <p>With years of proven expertise in business planning, we make sure that business owners like you have the information—and insights—they need to remain competitive and ensure financial stability for you and your loved ones years to come.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Succession Planning</h3>
        <p>Developing and implementing a well-designed succession plan is essential to the survival of a family business from one generation to the next.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">New Business Formation</h3>
        <p>The keys to a successful—and profitable—business are meticulous planning and a methodical approach to running your business. Failing to do this in the initial stages of business formation is often a recipe for disaster, and it’s the reason most businesses fail.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Non-Profit Organizations</h3>
        <p>The IRS uses very specific revenue and expense classifications to determine if your organization will retain its tax-exempt status.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Internal Controls</h3>
        <p>We assess your internal control systems to determine the efficiency and effectiveness of your operating procedures, then we make recommendations that help your company become stronger.</p>
      `,
    },
    {
      id: 5,
      title: "Tax Services for Businesses and Individuals",
      description: `
        <h3 class="text-2xl font-semibold text-primary mt-8">Tax Services for Businesses and Individuals</h3>
        <p>Today’s tax laws are complicated. Whether you’re preparing the return for your business or filing individual taxes, IRS compliance can be overwhelming. With so many important details to consider, it’s easy to make an error or omit something which could end up as a penalty, fine, or unwanted problem with the IRS.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Income Tax Preparation</h3>
        <p>We assist individuals and businesses with tax planning, preparation, and strategies designed to reduce tax burdens and increase savings.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Federal and State Tax Returns</h3>
        <p>Our tax preparers can help with both federal and state tax returns, ensuring compliance and maximizing deductions.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Tax Planning</h3>
        <p>Tax planning involves a proactive strategy to minimize your tax liability by utilizing credits, deductions, and other tax-saving strategies.</p>
      `,
    },
    {
      id: 6,
      title: "Retirement Planning",
      description: `
        <h3 class="text-2xl font-semibold text-primary mt-8">Retirement Planning</h3>
        <p>Planning for retirement is essential to ensure that you can enjoy your golden years without financial stress. Our experts help you navigate retirement options such as 401(k), IRA, and more to ensure you are on track.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Pension Planning</h3>
        <p>Understanding pension plans can be complicated. We offer comprehensive advice on managing pensions, maximizing benefits, and transitioning into retirement seamlessly.</p>
        <h3 class="text-2xl font-semibold text-primary mt-8">Investment Strategy</h3>
        <p>Our team assists you in building a tailored investment strategy that aligns with your long-term retirement goals, balancing risk and reward for a secure future.</p>
      `,
    },
  ];

  // Find the selected service based on the 'id' parameter
  const service = services.find((s) => s.id === parseInt(id));

  return (
    <div className="service-details max-w-7xl mx-auto p-6">
    {service ? (
      <div>
        {/* Service Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-6">{service.title}</h2>
  
        {/* Service Description */}
        <div
          className="service-description mt-6 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
  
        {/* Call to Action Button */}
        <div className="flex   flex-col gap-4 font-semibold justify-center items-center mt-8">
           
          <Link
            to="/pricing"
            className="bg-primary text-secondary px-6 py-3 rounded-lg text-sm font-semibold transition duration-300 transform hover:bg-secondary hover:text-primary hover:scale-105 border border-primary"
          >
           Buy Now
          </Link>
        </div>
      </div>
    ) : (
      <div className="error-message text-center mt-10">
        <p className="text-red-500 text-xl font-semibold">Service not found</p>
      </div>
    )}
  </div>
  
  );
};

export default ServiceDetails;
