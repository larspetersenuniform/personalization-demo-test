// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface PersonalizedHeroFields {
  /** Personalized Hero Name */
  name: string;

  /** Hero Options */
  unfrmOptP13nList?: Hero[] | undefined;
}

export interface PersonalizedHero extends Entry<PersonalizedHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: '3zPkEj1KqeSn4QdsdnNKO3';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface CallToActionFields {
  /** Heading */
  heading?: string | undefined;

  /** Subheading */
  subheading?: string | undefined;

  /** Button Link */
  buttonLink?: string | undefined;

  /** Button Text */
  buttonText?: string | undefined;

  /** Button Image */
  buttonImage?: Asset | undefined;
}

export interface CallToAction extends Entry<CallToActionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'cta';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface HeroFields {
  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Button Text */
  buttonText?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** Intent Tags */
  unfrmOptIntentTag?: Record<string, any> | undefined;

  /** Button Link Slug */
  buttonLinkSlug?: string | undefined;
}

export interface Hero extends Entry<HeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'hero';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface PageFields {
  /** Title */
  title?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Components */
  components?:
    | (CallToAction | Hero | PersonalizedHero | RegistrationForm | TalksList | WhyAttend)[]
    | undefined;
}

export interface Page extends Entry<PageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'page';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface RegistrationFormFields {
  /** Heading */
  heading?: string | undefined;

  /** ButtonText */
  buttonText?: string | undefined;

  /** Registered Text */
  registeredText?: string | undefined;
}

export interface RegistrationForm extends Entry<RegistrationFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'registrationForm';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface TalkFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Intent Tags */
  unfrmOptIntentTag?: Record<string, any> | undefined;
}

export interface Talk extends Entry<TalkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'talk';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface TalksListFields {
  /** Title */
  title?: string | undefined;

  /** Title When Personalized */
  p13nTitle?: string | undefined;

  /** NumberToShow */
  count?: number | undefined;

  /** Register Button Text */
  registerButtonText?: string | undefined;
}

export interface TalksList extends Entry<TalksListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'talksList';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface WhyAttendFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Image */
  image?: Asset | undefined;
}

export interface WhyAttend extends Entry<WhyAttendFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'whyAttend';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}
