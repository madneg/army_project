import React from "react";
import Link from "next/link";
const Nda = () => {
  return (
    <>
      <h2 className="flex justify-center items-center text-xl font-bold my-5">
        How to join National Defence Academy
      </h2>
      <div className="container mx-auto px-4 md:text-base text-sm">
        <div className="text-lg font-bold underline py-2 underline-offset-4">
          Nationality
        </div>
        <div>A candidate must be an unmarried male and must be:-</div>
        <ul>
          <ol className="list-disc space-y-1 mt-1">
            <li>A citizen of India, or</li>
            <li>A subject of Nepal or</li>
            <li>
              A Tibetan refugee who came over to India before the 1st Jan, 1962
              with the intention of permanently settling in India, or
            </li>
            <li>
              A person of Indian origin who has migrated from Pakistan, Burma,
              Sri Lanka and East African countries of Kenya, Uganda, the United
              Republic of Tanzania, Zambia, Zaire and Ethiopia or Vietnam with
              the intention of permanently settling in India.
            </li>
          </ol>
        </ul>
        <div className="my-5">
          <b> Note:-</b> Provided that a candidate belonging to categories (2)
          (3) & (4) above shall be a person in whose favour a certificate of
          eligibility has been issued by the Govt of India. Certificate of
          eligibility will not however, be necessary in the case of candidates
          who are Gorkha subjects of Nepal.
        </div>
      </div>
      <div className="container mx-auto px-4 md:text-base text-sm">
        <div className="text-lg font-bold py-2 underline underline-offset-4">
          Educational Qualification
        </div>
        <ol className="list-disc space-y-1 mb-4">
          <li>
            12th Pass of the 10+2 pattern of School or equivalent examination by
            a State Education Board or a University.
          </li>
        </ol>
        <div>
          <b> Note:-</b> Candidates who are appearing in the 12th Class under
          the 12+2 pattern of School Education or equivalent examination can
          also apply for this examination.
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 md:text-base text-sm">
        <div className="text-lg font-bold py-2 underline underline-offset-4">
          Physical/Medical Standards
        </div>
        <ul>
          <ol className="list-disc space-y-1 mb-4">
            <li>
              Candidates must be physically and mentally fit according to
              prescribed physical standards/guidelines given in Notification.
            </li>
            <li>
              To be deemed 'Medically Fit' a candidate must be in good physical
              and mental health and free from any disease /syndrome/disability
              likely to interfere with the efficient performance of military
              duties in any terrain, climate, season incl sea and air, in remote
              areas, in austere conditions with no medical aid.
            </li>
            <li>
              Candidate also should be free of medical conditions which require
              frequent visit to medical facilities and use of any aid/drugs.
            </li>
          </ol>
        </ul>
        <div>
          <b> Note:-</b> A candidate who has resigned or withdrawn on
          disciplinary grounds from any of the training academies of Armed
          Forces is not eligible to apply.
        </div>
      </div>
      <div className="container mx-auto px-2 mt-4 flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Parameters
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Height (in cm)
                    </th>
                    <th
                      scope="col"
                      colSpan="3"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-start"
                    >
                      Weight (in kgs)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-300 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Age
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      -
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      16-17 years
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      17-18 years
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      18-19 years
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Male Candidates
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      152-183
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      42.5-62.5
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      44-65
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      45-66.5
                    </td>
                  </tr>
                  <tr className="bg-gray-300 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Female Candidates
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      147-183
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      40-62.5
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      41- 65
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      42-66.5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 md:text-base text-sm">
        <div className="text-lg font-bold py-2 underline underline-offset-4">
          NDA Exam Syllabus Overview
        </div>
        <div className="flex flex-col -mx-2">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name of the Exam
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        National Defence Academy, NDA
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-300 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Exam Conducting Body
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Union Public Service Commission, UPSC
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Frequency of NDA Exam
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Two times a year (NDA 1 & NDA 2)
                      </td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Selection Process
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Written Test consisting of Objective Type Questions
                        Intelligence & Personality Test (SSB)
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mode of exam
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Offline (Pen and Paper mode)
                      </td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Total Papers in NDA Exam
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mathematics General Ability Test (GAT)
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Total Marks for NDA Exam
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <li>Total: 900 Marks</li>
                        <li>Mathematics: 300 Marks</li>
                        <li>GAT: 600 Marks</li>
                      </td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Total No. of Questions
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <li>Mathematics: 120</li>
                        <li>GAT: 150</li>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Negative Marking
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <li>Mathematics: -0.83</li>
                        <li>GAT: -1.33 marks</li>
                      </td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Exam Duration
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <li>Mathematics: 2 Hours 30 Minutes</li>
                        <li>GAT: 2 Hours 30 Minutes</li>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          Candidates can download the official NDA syllabus PDF to advance the
          exam preparation and prepare a study plan accordingly. Click the link
          below to download the UPSC NDA syllabus for different subjects of
          Paper 1 and 2.
          <div>
            ☛ UPSC NDA Syllabus PDF -
            <Link
              href={"https://www.studyiq.com/articles/nda-syllabus/"}
              target={"_blank"}
            >
              <span className="text-yellow-900 font-bold mx-3">
                Download Here
              </span>
            </Link>
          </div>
        </div>
        <div>
          <b> Note:-</b> A candidate who has resigned or withdrawn on
          disciplinary grounds from any of the training academies of Armed
          Forces is not eligible to apply.
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 md:text-base text-sm">
        <div className="text-lg font-bold underline py-2 underline-offset-4">
          NDA Salary during Training Period
        </div>
        <div>
          During the training period, Officers get the NDA salary of ₹56,100/-
          per month, which is the starting pay scale for this post. Army
          Officers and equivalent Air Force and Navy ranks are entitled to
          receive a stipend during the training process. Also, the benefits
          related to the pay scale start with the training period itself. NDA
          Stipend to Gentlemen Cadets during the entire duration of training in
          Service Academies, i.e., during the training period, is admissible at
          ₹56,100/- p.m. (Starting pay in Level 10).
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 md:text-base text-sm">
        <div className="text-lg font-bold underline py-2 underline-offset-4">
          NDA Salary: Perks and Allowances
        </div>
        <div>
          Employees also get allowances and benefits per their work and post,
          along with the NDA salary. The details of various allowances and
          benefits included in the NDA salary are below:
          <ul>
            <ol className="list-disc ml-4 mb-4">
              <li>Uniform Allowance</li>
              <li>As per the post-Compensatory Field Area Allowance</li>
              <li>
                As per the post, Compensatory Modified Field Area Allowance
              </li>
              <li>Dearness and Transport Allowance (DA/TA)</li>
              <li>Para Allowance</li>
              <li>Para jump instructor Allowance</li>
              <li>Para Reserve Allowance</li>
              <li>Technical Allowance Tier 1</li>
              <li>Technical Allowance Tier 2</li>
              <li>Special Forces Allowance</li>
              <li>Children's Education Allowance</li>
              <li>Hostel Subsidy</li>
            </ol>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nda;
