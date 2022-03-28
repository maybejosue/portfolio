import resume from '../assests/resume.pdf'

export default function Resume() {
    return (
        <iframe
            src={resume}
            title="Resume"
            style={{
                border: 0,
                height: '100%',
                position: 'absolute',
                width: '100%',
            }}
        />
    )
}
