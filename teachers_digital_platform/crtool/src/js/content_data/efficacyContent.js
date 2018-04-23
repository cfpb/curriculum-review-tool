export const EfficacyContent = {
    criterion: [
        {
            title: "Criterion 1: Strength of study (inclusion criteria)",
            leadParagraph: "Is the study strong? Only strong studies (those that meet rigorous standards) can be used to determine the efficacy of a curriculum. The inclusion criteria will help you determine whether or not a study meets these standards of a strong study.",
            notesRefId: "efficacy-crt-notes-optional-1",
            rows: [
                {
                    indicatorNumber: "1.1",
                    indicatorText: "The study uses a rigorous design, such as a randomized controlled trial (RCT) or quasi-experimental (non-random) design, with a comparison group.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.1.1",
                            hasInlineHtml: false,
                            componentText: "Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-1.1.2_beneficial",
                            hasInlineHtml: false,
                            componentText: "Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?",
                        },
                    ]
                },
                {
                    indicatorNumber: "1.2",
                    indicatorText: "Study procedures and implementation are thoroughly described, including the practices or curricula the treatment and comparison groups receive.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.2.1",
                            hasInlineHtml: false,
                            componentText: "Does the study adequately describe the intervention received by the treated students and (if applicable) the materials/practices delivered to the comparison students?",
                        },
                    ]
                },
                {
                    indicatorNumber: "1.3",
                    indicatorText: "Study is carried out well, with minimal overall and differential attrition, and there were no viable alternative explanations for the findings other than possible initial differences between groups.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-1.3.1_beneficial",
                            hasInlineHtml: false,
                            componentText: "Is the study free of possible alternative explanations other than possible initial differences between groups?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-1.3.2_beneficial",
                            hasInlineHtml: false,
                            componentText: "Are the levels of attrition low, as defined by the What Works Clearinghouse? (e.g., differential attrition below 11%)",
                        },
                    ]
                },
                {
                    indicatorNumber: "1.4",
                    indicatorText: "The study outcome measures are valid and reliable, and outcome data are collected the same way across subjects.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.4.1",
                            hasInlineHtml: false,
                            componentText: "Is there at least one student-level outcome?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.4.2",
                            hasInlineHtml: false,
                            componentText: "Is the student outcome measure clearly defined and a measure of the intended construct?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.4.3",
                            hasInlineHtml: false,
                            componentText: "Are the student outcome measures collected in the same manner for all study participants?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.4.4",
                            hasInlineHtml: false,
                            componentText: "Does the study measure student financial knowledge, attitudes, or behavior?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-1.4.5_beneficial",
                            hasInlineHtml: false,
                            componentText: "Does the study measure student outcomes immediately after the curriculum has been completed and at least three months later?",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-1.4.6_beneficial",
                            hasInlineHtml: false,
                            componentText: "Does the study collect student outcome data from a source other than (or in addition to) the students?",
                        },
                    ]
                },
                {
                    indicatorNumber: "1.5",
                    indicatorText: "The data are analyzed using appropriate statistical techniques.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.5",
                            hasInlineHtml: false,
                            componentText: "Is the analysis performed using appropriate statistical techniques? (e.g., correct test of significance, correct level of analysis)",
                        },
                    ]
                },
                {
                    indicatorNumber: "1.6",
                    indicatorText: "Evidence of impact is recent enough to be relevant.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-1.6",
                            hasInlineHtml: false,
                            componentText: "Was the study performed in the last 10 years?",
                        },
                    ]
                },
            ]
        },
        {
            title: "Criterion 2: Saving and investing",
            leadParagraph: "Is there enough evidence (when looking at all the strong studies as a whole) to support the research that this is an effective curriculum?",
            notesRefId: "efficacy-crt-notes-optional-2",
            rows: [
                {
                    indicatorNumber: "2.1",
                    indicatorText: "There is sufficient research to judge efficacy.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-2.1_beneficial",
                            hasInlineHtml: false,
                            componentText: "Do the evaluations, collectively or individually, include at least 350 students or 14 classrooms?",
                        },
                    ]
                },
                {
                    indicatorNumber: "2.2",
                    indicatorText: "The studies examine the range of participants and settings for which the curriculum was designed.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-2.2.1_beneficial",
                            hasInlineHtml: false,
                            componentText: "Do the evaluations, collectively or individually, span the range of participants (e.g., grade levels) and settings (e.g., in class instruction) for which the curriculum was designed?",
                        },
                    ]
                },
            ]
        },
        {
            title: "Criterion 3: Impact",
            leadParagraph: "Is there enough evidence to support conclusions of consistent, strong, positive impact?",
            notesRefId: "efficacy-crt-notes-optional-3",
            rows: [
                {
                    indicatorNumber: "3.1",
                    indicatorText: "Positive impacts are statistically significant and substantively important.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-3.1.1",
                            hasInlineHtml: false,
                            componentText: "Does at least one evaluation indicate positive effects significant at the 10% level?",
                        },
                    ]
                },
                {
                    indicatorNumber: "3.2",
                    indicatorText: "Findings are consistent across studies and context; there is evidence of positive effects with no overriding contrary evidence.",
                    components: [
                        {
                            showNaButton: false,
                            showBeneficialText: false,
                            criterionRefId: "efficacy-crt-question-3.2.1",
                            hasInlineHtml: false,
                            componentText: "Do all evaluations indicate either a positive effect or no effect? (i.e., not a statistically significant negative effect)",
                        },
                        {
                            showNaButton: false,
                            showBeneficialText: true,
                            criterionRefId: "efficacy-crt-question-3.2.2_beneficial",
                            hasInlineHtml: false,
                            componentText: "Do at least two evaluations indicate statistically significant positive effects with no evaluation indicating statistically significant negative effects?",
                        },
                    ]
                },
            ]
        }
    ]
};
