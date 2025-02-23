import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Andrea",
    role: "UI/UX",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  {
    name: "Alvaro",
    role: "Full Stack Developer",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211797547-047dd95d-36f8-4962-a25d-515dbea2498a-F1zu9srk2K59eUtXPmcxKb82m0yUic.png",
    mood: "happy",
  },
  // Add more team members as needed
];

export function TeamMood() {
  const getMoodEmoji = (mood) => {
    switch (mood) {
      case "happy":
        return "😊";
      case "neutral":
        return "😐";
      case "sad":
        return "😔";
      default:
        return "😊";
    }
  };

  return (
    <Card className="border-transparent hover:border-[rgb(255,118,139)] bg-white">
      <CardHeader>
        <CardTitle>Team mood</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div>{getMoodEmoji(member.mood)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
