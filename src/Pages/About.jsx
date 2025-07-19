import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    return (
        <>
            <section className="mt-20 text-gray-800 py-12 px-6 md:px-20 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
                        About Watchify
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Corrupti voluptatem, voluptates veniam enim molestiae dolores sed reprehenderit aliquam animi quod harum a, ipsam rem ab modi inventore eius tempore expedita illo mollitia numquam!
                        Optio illo vero quos laborum, autem velit fuga culpa magni repellat quidem dicta enim iusto sit voluptatibus!
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illo!
                    </p>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero, libero incidunt commodi soluta consequatur autem iusto, debitis tempora magni praesentium quisquam ut iste dolores quo officia at.
                    </p>
                </div>
                <div className="mt-5">
                    <Accordion disableGutters
                        sx={{
                            '&:before': {
                                display: 'none',
                            },
                            margin: '0',          
                            border: '1px solid rgb(140, 184, 184)'
                        }}
                    >
                        <AccordionSummary
                            sx={{
                                bgcolor: "rgb(145, 212, 212)",
                                textAlign: 'center',
                                justifyContent: 'center'
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Watchify history
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                bgcolor: "rgb(186, 191, 191)"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                            lacus ex, sit amet blandit leo lobortis eget. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nisi? <br />
                            Lorem ipsum dolor sit amet.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disableGutters
                        sx={{
                            '&:before': {
                                display: 'none',
                            },
                            margin: '0', 
                            border: '1px solid rgb(140, 184, 184)'
                        }}>
                        <AccordionSummary
                            sx={{
                                bgcolor: "rgb(145, 212, 212)",
                                textAlign: 'center',
                                justifyContent: 'center'
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Watchify brands
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                bgcolor: "rgb(186, 191, 191)"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                            lacus ex, sit amet blandit leo lobortis eget. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat porro error eos beatae facere reiciendis aliquid, natus repudiandae illo ex.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disableGutters
                        sx={{
                            '&:before': {
                                display: 'none',
                            },
                            margin: '0',
                            border: '1px solid rgb(140, 184, 184)'
                        }}>
                        <AccordionSummary
                            sx={{
                                bgcolor: "rgb(145, 212, 212)",
                                textAlign: 'center',
                                justifyContent: 'center'
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Why was Watchify made?
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                bgcolor: "rgb(186, 191, 191)"
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                            lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>
        </>
    )
}