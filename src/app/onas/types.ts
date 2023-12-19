export type ImagesResponse = {
    total_count: number;
    time: number;
    resources: Resource[];
    rate_limit_allowed: number;
    rate_limit_reset_at: string;
    rate_limit_remaining: number;
};

export interface Resource {
    asset_id: string;
    public_id: string;
    folder: string;
    filename: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    uploaded_at: string;
    bytes: number;
    backup_bytes: number;
    width: number;
    height: number;
    aspect_ratio: number;
    pixels: number;
    url: string;
    secure_url: string;
    status: string;
    access_mode: string;
    access_control: null;
    etag: string;
    created_by: EdBy;
    uploaded_by: EdBy;
}

export interface EdBy {
    access_key: string;
    custom_id: string;
    external_id: string;
}
