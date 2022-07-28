export const EfficacyStudyContent = {
  criterion: [
    {
      title: 'Criterion 1: Strength of study (inclusion criteria)',
      leadParagraph: 'Is the study strong? Only strong studies (those that meet rigorous standards) can be used to determine the efficacy of a curriculum. The inclusion criteria will help you determine whether or not a study meets these standards of a strong study.',
      notesRefId: 'efficacy-crt-question-1#_study_#_notes_optional',
      studyNameRefId: 'efficacy-crt-question-#_study_#study',
      divId: 'criterion_1',
      rows: [
        {
          indicatorNumber: '1.1',
          indicatorText: 'The study uses a rigorous design, such as a randomized controlled trial (RCT) or quasi-experimental (non-random) design, with a comparison group.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.1.1#_study_#',
              hasInlineHtml: false,
              componentText: 'Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-1.1.2#_study_#_beneficial',
              hasInlineHtml: false,
              componentText: 'Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?'
            }
          ]
        },
        {
          indicatorNumber: '1.2',
          indicatorText: 'Study procedures and implementation are thoroughly described, including the practices or curricula the treatment and comparison groups receive.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.2#_study_#',
              hasInlineHtml: false,
              componentText: 'Does the study adequately describe the intervention received by the treated students and (if applicable) the materials/practices delivered to the comparison students?'
            }
          ]
        },
        {
          indicatorNumber: '1.3',
          indicatorText: 'Study is carried out well, with minimal overall and differential attrition, and there were no viable alternative explanations for the findings other than possible initial differences between groups.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-1.3.1#_study_#_beneficial',
              hasInlineHtml: false,
              componentText: 'Is the study free of possible alternative explanations other than possible initial differences between groups?'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-1.3.2#_study_#_beneficial',
              hasInlineHtml: false,
              componentText: 'Are the levels of attrition low, as defined by the What Works Clearinghouse? (e.g., differential attrition below 11%)'
            }
          ]
        },
        {
          indicatorNumber: '1.4',
          indicatorText: 'The study outcome measures are valid and reliable, and outcome data are collected the same way across subjects.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.4.1#_study_#',
              hasInlineHtml: false,
              componentText: 'Is there at least one student-level outcome?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.4.2#_study_#',
              hasInlineHtml: false,
              componentText: 'Is the student outcome measure clearly defined and a measure of the intended construct?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.4.3#_study_#',
              hasInlineHtml: false,
              componentText: 'Are the student outcome measures collected in the same manner for all study participants?'
            },
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.4.4#_study_#',
              hasInlineHtml: false,
              componentText: 'Does the study measure student financial knowledge, attitudes, or behavior?'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-1.4.5#_study_#_beneficial',
              hasInlineHtml: false,
              componentText: 'Does the study measure student outcomes immediately after the curriculum has been completed and at least three months later?'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-1.4.6#_study_#_beneficial',
              hasInlineHtml: false,
              componentText: 'Does the study collect student outcome data from a source other than (or in addition to) the students?'
            }
          ]
        },
        {
          indicatorNumber: '1.5',
          indicatorText: 'The data are analyzed using appropriate statistical techniques.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.5#_study_#',
              hasInlineHtml: false,
              componentText: 'Is the analysis performed using appropriate statistical techniques? (e.g., correct test of significance, correct level of analysis)'
            }
          ]
        },
        {
          indicatorNumber: '1.6',
          indicatorText: 'Evidence of impact is recent enough to be relevant.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-1.6#_study_#',
              hasInlineHtml: false,
              componentText: 'Was the study performed in the last 10 years?'
            }
          ]
        }
      ]
    }
  ]
};
