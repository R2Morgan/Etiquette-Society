import { Component } from '@angular/core';
import {CommonModule, NgClass} from "@angular/common";
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";

@Component({
  selector: 'our-story-page',
  standalone: true,
  imports: [
    NgClass, CommonModule, ScrollAnimateDirective
  ],
  templateUrl: './our-story-page.component.html',
  styleUrl: './our-story-page.component.scss'
})
export class OurStoryPageComponent {
  achievements = [
    {
      id: 1,
      title: "The Genesis",
      date: "cca. 2024",
      image:
        "assets/about-us/01-Genesis.JPG",
      description:
        "Etiquette Society began when the right idea met the right timing, uniting two founders and a growing demand " +
        "for a community of refined men.",
      tag: "Origin"
    },
    {
      id: 2,
      title: "Stefan-Eduard Dobrescu",
      date: "cca. 1999",
      image:
        "assets/about-us/02-Stefan.JPG",
      description:
        "Stefan combines analytical thinking, technical expertise, and a strong social media presence to grow the " +
        "community and maintain its digital identity.",
      tag: "Strategy"
    },
    {
      id: 3,
      title: "Cristian Lapadean-Miron",
      date: "cca. 1996",
      image:
        "assets/about-us/03-Cristian.JPG",
      description:
        "Cristian brings field experience, initiative, and an extensive network that drives real-world " +
        "connections and opportunities for the group.",
      tag: "Action"
    },
    {
      id: 4,
      title: "The Council of 12",
      date: "14.09.2025",
      image:
        "assets/about-us/04-12.JPG",
      description:
        "The original twelve members laid the groundwork for Etiquette Society, shaping its standards" +
        " and traditions from day one.",
      tag: "Foundation"
    },
    {
      id: 5,
      title: "Goals and Vision",
      date: "2025-",
      image:
        "assets/about-us/05-Vision.JPG",
      description:
        "We cultivate character, style, and conduct, building a community of men who choose refinement deliberately.",
      tag: "Purpose"
    }
  ];

  sections = [
    {
      id: 1,
      title: "The Genesis",
      description: "Etiquette Society began when the right idea met the right timing, uniting two founders and a growing demand for a community of refined men.",
      text: "Etiquette Society began not with a grand plan, but with perfect timing.<br><br>" +
        "Stefan Dobrescu and Cristian Miron Lapadan first met at an event — exchanged little more than presence — and then went an entire year without speaking. Stefan forgot the encounter entirely. Cristian, however, never forgot the idea that had formed.<br><br>" +
        "For months, Cristian would occasionally see Stefan pass by the place where he worked, considering whether to approach him and share his vision of a community built around classic men’s style, etiquette, and standards. He never did.<br><br>" +
        "Until one day, he sent a message on Instagram.<br><br>" +
        "The timing was precise. Around that same period, Stefan had been receiving numerous messages from men who followed his content on classic menswear — asking whether a group like this existed, somewhere refinement, discipline, and elegance were taken seriously.<br><br>" +
        "There wasn’t.<br><br>" +
        "So we decided to build it.",
      image: "assets/about-us/01-Genesis.JPG"
    },
    {
      id: 2,
      title: "Stefan-Eduard Dobrescu",
      description: "Stefan combines analytical thinking, technical expertise, and a strong social media presence to grow the community and maintain its digital identity.",
      text: "Stefan brings analytical thinking, technical expertise, and a strong social media presence to Etiquette Society.<br><br>" +
        "He manages the website, maintains the group’s online presence, and ensures that every digital interaction reflects the Society’s standards and tone.<br><br>" +
        "Through his work as a content creator in the classic style niche, where he has over 100k followers, Stefan attracts new members and connects with men who are seeking guidance, refinement, and a sense of community. Through his style and poise, he shapes the way the group presents itself<br><br>" +
        "For Stefan, elegance is not performance — it is alignment between appearance, conduct, and character. His work guarantees that the Society’s vision is translated into consistent action, building a community that is both thoughtful and connected.",
      image: "assets/about-us/02-Stefan.JPG"
    },
    {
      id: 3,
      title: "Cristian Lapadean-Miron",
      description: "Cristian brings field experience, initiative, and an extensive network that drives real-world connections and opportunities for the group.",
      text: "Cristian is the initiator — the one who turns ideas into reality.<br><br>" +
        "With hands-on experience at Tudor Tailor and a deep understanding of the menswear and tailoring industry, he ensures that Etiquette Society is grounded in practical expertise and high standards.<br><br>" +
        "His extensive network of contacts has been instrumental in creating opportunities for the group, from exclusive meetups to collaborations with artisans and experts, connecting members with experiences they wouldn’t find elsewhere.<br><br>" +
        "Cristian’s strength lies in taking action. He is always thinking several steps ahead, coordinating logistics, introducing members to key figures, and making sure that every initiative runs smoothly. His commitment ensures that admiration for style and refinement becomes shared standards and meaningful, lived experiences for every member.<br><br>" +
        "Cristian understands that vision alone is not enough — it requires execution, consistency, and the courage to take the first step.",
      image: "assets/about-us/03-Cristian.JPG"
    },
    {
      id: 4,
      title: "The Council of 12",
      description: "The original twelve members laid the groundwork for Etiquette Society, shaping its standards and traditions from day one.",
      text: "On September 14th, Etiquette Society held its first official meeting.<br><br>" +
        "Twelve men attended — the original twelve who believed in something that, at that moment, existed only as intention. They were the founding members who gave form to the idea.<br><br>" +
        "What began as a single meeting evolved into recurring coffee gatherings, structured discussions, social evenings, and meaningful connections. The numbers grew, but the standard remained.<br><br>" +
        "The Council represents not hierarchy, but origin — a reminder that every institution begins with a small circle of conviction.",
      image: "assets/about-us/04-12.JPG"
    },
    {
      id: 5,
      title: "Goals and Vision",
      description: "We cultivate character, style, and conduct, building a community of men who choose refinement deliberately.",
      text: "Etiquette Society exists to restore intention to modern life.<br><br>" +
        "Our aim is not nostalgia, nor rigidity, nor elitism. It is cultivation — of character, of taste, of conduct. We explore classic menswear, social intelligence, discipline, and the principles that shape a refined man in a modern world.<br><br>" +
        "Through private gatherings, shared experiences, and our podcast launched in December, we continue to expand the conversation beyond a room and into a movement.<br><br>",
      image: "assets/about-us/05-Vision.JPG"
    }
  ];

  mainVisible = true;
  activeIndex = 0;
  total = this.achievements.length;

  goTo(index: number) {
    this.fadeMainSection(() => {
      this.activeIndex = index;
    });
  }

  next() {
    this.fadeMainSection(() => {
      this.activeIndex = (this.activeIndex + 1) % this.total;
    });
  }

  prev() {
    this.fadeMainSection(() => {
      this.activeIndex = (this.activeIndex - 1 + this.total) % this.total;
    });
  }

  fadeMainSection(callback: () => void) {
    // Hide the main-section first
    this.mainVisible = false;

    // Wait for CSS transition to finish (match your CSS duration, 1s)
    setTimeout(() => {
      callback();         // Update the activeIndex
      this.mainVisible = true; // Fade in the new section
    }, 300); // short delay for smoothness (optional: 300-400ms)
  }

  getPositionClass(index: number): string {
    let offset = index - this.activeIndex;

    if (offset > Math.floor(this.total / 2)) offset -= this.total;
    if (offset < -Math.floor(this.total / 2)) offset += this.total;

    if (offset === 0) return 'active';
    if (offset === -1) return 'left';
    if (offset === 1) return 'right';
    if (offset < -1) return 'far-left';
    if (offset > 1) return 'far-right';

    return 'hidden';
  }
}
