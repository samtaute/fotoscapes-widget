export interface Block{
    blockType: string; 
  }
  
  export type ValidBlockConfig = 
  | BlockFotoscapeConfig
  | BlockAdConfig
  | BlockRevealMemesConfig
  | BlockOutbrainConfig
  export type ItemList = FotoscapeItem[];
  
  
  export type FotoscapeItem = {
    title: string;
    url: string;
    imageUrl: string;
    description: string; 
  }
  
  
  export type BlockSettingLayout =
    | "carousel"
    | "carousel-photocard"
    | "daily-top"
    | "deals-list"
    | "edge"
    | "edge-description"
    | "edge-list"
    | "edge-tile"
    | "games-carousel"
    | "games-hero"
    | "games-tile"
    | "large-photocard"
    | "licensed"
    | "list-medium"
    | "list-small"
    | "list-small-sponsored"
    | "podcast-large"
    | "podcast-small"
    | "quiz-carousel"
    | "quiz-hero"
    | "quiz-tile"
    | "slideshow"
    | "small-photocard"
    | "small-photocard-flat"
    | "stub"
    | "tile"
    | "trending-carousel"
    | "instant-play-games";
  
    export interface PageConfig {
      categories: string[]; 
    }
  export interface BlockFotoscapeConfig {
    blockType: 'fotoscape_block';
    settings: {
      count: number;
      category?: string; //differs from definition.ts
      layout: string;
      cta?: boolean;
      title?: "string";
      link_destination?: "fotoscape" | "full_page_article" | "referral" | "stub";
      transition?: boolean;
      layout_config?: {
        stub?: {
          hide_description: boolean;
        };
        trending_carousel?: {
          background_color:
            | "red"
            | "green"
            | "black"
            | "blue"
            | "lightblue"
            | "orange"
            | "teal"
            | "blue"
            | "purple";
        };
        daily_top?: {
          subtitle: string;
          settings_icon_url: string;
          button_title: string;
          brought_by?: boolean;
        };
      };
    };
  }
  
  export interface BlockRevealMemesConfig extends Block {
    blockType: 'memes_widget_block'
  }
  
  export interface BlockAdConfig extends Block {
    blockType: 'ad_unit'
  }
  
  
  export interface BlockOutbrainConfig extends Block {
    blockType: 'outbrain_block'
  
    /**
     * Block settings.
     */
    settings: {
      widgetId:
        | 'JS_1'
        | 'JS_2'
        | 'JS_3'
        | 'JS_4'
        | 'JS_5'
        | 'JS_6'
        | 'JS_9'
        | 'JS_12'
        | 'JS_16'
        | 'JS_13'
        | 'JS_14'
        | 'JS_17'
        | 'JS_21'
        | 'JS_22'
        | 'JS_23'
      layout: BlockSettingLayout
  
      /**
       * For sponsored content blocks. Show subtitle with 'sponsored by' text.
       */
      hasBranding?: boolean
    }
  }
  