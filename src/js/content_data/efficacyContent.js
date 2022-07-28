export const EfficacyContent = {
  criterion: [
    {
      title: 'Criterion 2: Scope of evidence',
      leadParagraph: 'Is there enough evidence (when looking at all the strong studies as a whole) to support the research that this is an effective curriculum?',
      notesRefId: 'efficacy-crt-notes-optional-2',
      questionRefId: 'efficacy-crt-question-2',
      rows: [
        {
          indicatorNumber: '2.1',
          indicatorText: 'There is sufficient research to judge efficacy.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-2.1_beneficial',
              hasInlineHtml: false,
              componentText: 'Do the evaluations, collectively or individually, include at least 350 students or 14 classrooms?'
            }
          ]
        },
        {
          indicatorNumber: '2.2',
          indicatorText: 'The studies examine the range of participants and settings for which the curriculum was designed.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-2.2_beneficial',
              hasInlineHtml: false,
              componentText: 'Do the evaluations, collectively or individually, span the range of participants (e.g., grade levels) and settings (e.g., in class instruction) for which the curriculum was designed?'
            }
          ]
        }
      ]
    },
    {
      title: 'Criterion 3: Impact',
      leadParagraph: 'Is there enough evidence to support conclusions of consistent, strong, positive impact?',
      notesRefId: 'efficacy-crt-notes-optional-3',
      questionRefId: 'efficacy-crt-question-3',
      rows: [
        {
          indicatorNumber: '3.1',
          indicatorText: 'Positive impacts are statistically significant and substantively important.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-3.1',
              hasInlineHtml: false,
              componentText: 'Does at least one evaluation indicate positive effects significant at the 10% level?'
            }
          ]
        },
        {
          indicatorNumber: '3.2',
          indicatorText: 'Findings are consistent across studies and context; there is evidence of positive effects with no overriding contrary evidence.',
          components: [
            {
              showNaButton: false,
              showBeneficialText: false,
              criterionRefId: 'efficacy-crt-question-3.2.1',
              hasInlineHtml: false,
              componentText: 'Do all evaluations indicate either a positive effect or no effect? (i.e., not a statistically significant negative effect)'
            },
            {
              showNaButton: false,
              showBeneficialText: true,
              criterionRefId: 'efficacy-crt-question-3.2.2_beneficial',
              hasInlineHtml: false,
              componentText: 'Do at least two evaluations indicate statistically significant positive effects with no evaluation indicating statistically significant negative effects?'
            }
          ]
        }
      ]
    }
  ]
};
