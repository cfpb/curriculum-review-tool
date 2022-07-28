import React from 'react';

export const QualityContent = {
  criterion: [
    {
      criterionNumber: '1',
      criterionName: 'Criterion 1: Accessibility',
      criterionLead: 'Curriculum materials are physically accessible to teachers and students in a typical school setting.',
      criterionExceedsText: <>All essential components scored “yes”<br />At least one beneficial component scored “yes”</>,
      criterionMeetsText: <>All essential components scored “yes”<br />None of the beneficial components scored “yes”</>,
      criterionDoesNotMeetText: 'One or more essential components scored “no”',
      showExceeds: true,
      showBeneficial: true,
      title: 'Criterion 1: Accessibility',
      leadParagraph: 'Are curriculum materials physically accessible to teachers and students in a typical school setting?',
      notesRefId: 'quality-crt-notes-optional-1',
      questionRefId: 'quality-crt-question-1',
      divId: 'criterion_1',
      rows: [
        {
          indicatorNumber: '1.1',
          indicatorText: 'Web-based materials can be accessed using typical school technology and software; links are viewable and work. Paper-based materials are available for a moderate and clearly stated price.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-1.1.1',
              hasInlineHtml: true,
              componentText: <><p>If there are <strong>paper-based materials:</strong></p><p>Are paper-based materials available at no cost or for a clearly stated price?</p></>,
              criterionTextRefId: 'quality-crt-text-optional-1.1.1',
              criterionTextLabel: 'Cost of materials per student',
              criterionTextPlaceholder: '$'
            },
            {
              showNaButton: true,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-1.1.2',
              hasInlineHtml: true,
              componentText: <><p>If there are <strong>links</strong>:</p><p>Do the links take the user to the appropriate, live website?</p></>
            },
            {
              showNaButton: true,
              showBeneficialText: true,
              criterionRefId: 'quality-crt-question-1.1.3_beneficial',
              hasInlineHtml: true,
              componentText: <><p>If there are <strong>web-based materials:</strong></p><p>Can web-based material be accessed without purchasing specialized software?</p></>,
              criterionTextRefId: 'quality-crt-text-optional-1.1.3',
              criterionTextLabel: 'Specialized software'
            }
          ]
        },
        {
          indicatorNumber: '1.2',
          indicatorText: 'Copyright limitations on use are minimal and clearly stated.',
          components: [
            {
              showNaButton: true,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-1.2.1',
              hasInlineHtml: true,
              componentText: <><p>If there are limitations on use, are <strong>limitations clearly specified</strong>? (e.g., materials are copyrighted or must be purchased)</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-1.2.2',
              hasInlineHtml: false,
              componentText: 'Are the materials free from limitations on use that might interfere with delivery in a classroom setting?'
            }
          ]
        },
        {
          indicatorNumber: '1.3',
          indicatorText: 'Materials are available in alternate languages and include special needs formats (e.g., Braille).',
          components: [
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'quality-crt-question-1.3.1_beneficial',
              hasInlineHtml: false,
              componentText: 'Do the materials include any special needs formats? (e.g., Braille)',
              criterionTextRefId: 'quality-crt-text-optional-1.3.1',
              criterionTextLabel: 'Special needs formats include'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'quality-crt-question-1.3.2_beneficial',
              hasInlineHtml: false,
              componentText: 'Are the materials available in languages other than English?',
              criterionTextRefId: 'quality-crt-text-optional-1.3.2',
              criterionTextLabel: 'Languages included'
            }
          ]
        },
        {
          indicatorNumber: '1.4',
          indicatorText: 'Written materials and physical products are durable and reusable or easy to replace.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'quality-crt-question-1.4_beneficial',
              hasInlineHtml: false,
              componentText: 'Are written materials and physical products durable and reusable or easy to replace? (e.g., continued electronic access to materials at no additional cost)'
            }
          ]
        }
      ]
    },
    {
      criterionNumber: '2',
      criterionName: 'Criterion 2: Accuracy and timeliness',
      criterionLead: 'Curriculum materials are current and free of errors.',
      criterionMeetsText: 'All essential components scored “yes”',
      criterionDoesNotMeetText: 'One or more essential components scored “no”',
      showExceeds: false,
      showBeneficial: false,
      title: 'Criterion 2: Accuracy and timeliness',
      leadParagraph: 'Are curriculum materials current and free of error?',
      notesRefId: 'quality-crt-notes-optional-2',
      questionRefId: 'quality-crt-question-2',
      divId: 'criterion_2',
      rows: [
        {
          indicatorNumber: '2.1',
          indicatorText: 'Materials are revised regularly and the date of publication or revision is clearly stated.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-2.1',
              hasInlineHtml: true,
              componentText: <><p>Have some or all of the materials been published or updated within the <strong>last three years</strong>?</p></>
            }
          ]
        },
        {
          indicatorNumber: '2.2',
          indicatorText: 'Materials do not contain factual errors or internal inconsistencies.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-2.2.1',
              hasInlineHtml: false,
              componentText: 'Are the materials free of factual errors?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-2.2.2',
              hasInlineHtml: false,
              componentText: 'Are the materials internally consistent such that none of the material contradicts another part of the material?'
            }
          ]
        },
        {
          indicatorNumber: '2.3',
          indicatorText: 'Materials do not contain errors.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-2.3',
              hasInlineHtml: false,
              componentText: 'Are the materials free of spelling, punctuation, formatting, grammatical, and layout errors?'
            }
          ]
        }
      ]
    },
    {
      criterionNumber: '3',
      criterionName: 'Criterion 3: Objectivity',
      criterionLead: 'Curriculum materials are objective.',
      criterionExceedsText: <>All essential components scored “yes”<br />At least one beneficial component scored “yes”</>,
      criterionMeetsText: <>All essential components scored “yes”<br />None of the beneficial components scored “yes”</>,
      criterionDoesNotMeetText: 'One or more essential components scored “no”',
      showExceeds: true,
      showBeneficial: true,
      title: 'Criterion 3: Objectivity',
      leadParagraph: 'Are the curriculum materials objective?',
      notesRefId: 'quality-crt-notes-optional-3',
      questionRefId: 'quality-crt-question-3',
      divId: 'criterion_3',
      rows: [
        {
          indicatorNumber: '3.1',
          indicatorText: 'Materials differentiate between fact and interpretation, and discuss differing viewpoints.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.1.1',
              hasInlineHtml: false,
              componentText: 'Are interpretations or opinions clearly identified as such, rather than presented as facts?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.1.2',
              hasInlineHtml: false,
              componentText: 'Do the materials often present differing viewpoints? (e.g., preferences for modes of savings)'
            }
          ]
        },
        {
          indicatorNumber: '3.2',
          indicatorText: 'Materials show diversity. Text, illustrations, and activities are culturally sensitive.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.2.1',
              hasInlineHtml: false,
              componentText: 'Do the materials reﬂect diversity in areas such as age, race/ethnicity, gender, and household income?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.2.2',
              hasInlineHtml: false,
              componentText: 'Is the content culturally sensitive? (e.g., examples are culturally relevant, free from stereotypes and derogatory terms)'
            }
          ]
        },
        {
          indicatorNumber: '3.3',
          indicatorText: 'Materials do not promote branded products, and do explicitly identify funders and authors.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.3.1',
              hasInlineHtml: false,
              componentText: 'Are the authors and funders of development and dissemination clearly disclosed?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-3.3.2',
              hasInlineHtml: false,
              componentText: 'Do the materials abstain from promoting particular branded products or specific financial service providers? (e.g., free of slogans, logos, and statements promoting specific branded products or providers)'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'quality-crt-question-3.3.3_beneficial',
              hasInlineHtml: false,
              componentText: 'Are the authors’ credentials presented, and do the credentials demonstrate financial education expertise?'
            }
          ]
        }
      ]
    },
    {
      criterionNumber: '4',
      criterionName: 'Criterion 4: Visual appearance',
      criterionLead: 'The visual appearance of the student materials is conducive to learning.',
      criterionMeetsText: 'All essential components scored “yes”',
      criterionDoesNotMeetText: 'One or more essential components scored “no”',
      showExceeds: false,
      showBeneficial: false,
      title: 'Criterion 4: Visual appearance',
      leadParagraph: 'Is the visual appearance of the student materials conducive to learning?',
      notesRefId: 'quality-crt-notes-optional-4',
      questionRefId: 'quality-crt-question-4',
      divId: 'criterion_4',
      rows: [
        {
          indicatorNumber: '4.1',
          indicatorText: 'The design supports learning rather than distracts.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.1.1',
              hasInlineHtml: true,
              componentText: <><p>Are the visuals <strong>informative</strong> and <strong>related to the text</strong>?</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.1.2',
              hasInlineHtml: true,
              componentText: <><p>Do the visuals focus on <strong>core concepts</strong>? (e.g., not prioritizing unimportant information because it is easier to display)</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.1.3',
              hasInlineHtml: true,
              componentText: <><p>Are visual displays clearly <strong>labeled</strong> and in <strong>close proximity to related text</strong>?</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.1.4',
              hasInlineHtml: true,
              componentText: <><p>Is the content organized <strong>logically</strong> and <strong>consistently</strong>?</p></>
            }
          ]
        },
        {
          indicatorNumber: '4.2',
          indicatorText: 'The formatting is clear and easy to read.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.2.1',
              hasInlineHtml: true,
              componentText: <><p>Is the text <strong>easy to read</strong>? (e.g., simple fonts, serif, large enough type, normal spacing, unjustified paragraphs, white spaces between columns, capitalization consistent with normal use)</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.2.2',
              hasInlineHtml: true,
              componentText: <><p>Are web-based materials organized in <strong>logical</strong> and manageable sections?</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.2.3',
              hasInlineHtml: true,
              componentText: <><p>Is the web-based presentation <strong>readable</strong>? (e.g., maximum of 60 characters per line, use of full screen)</p></>
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'quality-crt-question-4.2.4',
              hasInlineHtml: true,
              componentText: <><p>Are web-based materials <strong>easy to navigate</strong>? (e.g., organized with a menu, easy to switch between lessons/sections, able to resume where last left off)</p></>
            }
          ]
        }
      ]
    }
  ]
};
